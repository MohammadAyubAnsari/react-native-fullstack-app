import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import FooterMenu from "../components/Menus/FooterMenu";
import axios from "axios";
import PostCard from "../components/PostCard";

const Myposts = () => {
  // local state
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  //   get user post
  const getUserPosts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/post/get-user-post");
      setLoading(false);
      setPosts(data?.userPosts);
    } catch (err) {
      setLoading(false);
      console.log(err);
      alert(err);
    }
  };

  //   initial
  useEffect(() => {
    getUserPosts();
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView>
        <PostCard posts={posts} />
        {/* <Text>{JSON.stringify(posts, null, 4)}</Text> */}
      </ScrollView>
      <View style={{ backgroundColor: "#ffffff" }}>
        <FooterMenu />
      </View>
    </View>
  );
};

export default Myposts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    // marginTop: 40,
  },
});

import { View, Text, Alert } from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import moment from "moment/moment";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import axios from "axios";
import EditModal from "./EditModal";
import { useNavigation } from "@react-navigation/native";

const PostCard = ({ posts, myPostScreen }) => {
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [post, setPost] = useState({});
  const navigation = useNavigation();
  // handle prompt
  const handleDeletePrompt = (id) => {
    Alert.alert("Attention!", "Are you sure , want to delete post?", [
      {
        text: "DELETE",
        onPress: () => handleDeletePost(id),
      },
      {
        text: "CANCEL",
        onPress: () => {
          console.log("cancel pressed");
        },
      },
    ]);
  };

  // delete post
  const handleDeletePost = async (id) => {
    try {
      setLoading(true);
      const { data } = await axios.delete(`/post/delete-post/${id}`);
      setLoading(false);
      alert(data?.message);
    } catch (err) {
      setLoading(false);
      console.log(err);
      alert(err);
    }
  };

  return (
    <View>
      <Text style={styles.heading}>Total Posts: {posts?.length}</Text>
      {myPostScreen && (
        <EditModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          post={post}
        />
      )}
      {posts?.map((post, i) => (
        <View style={styles.card} key={i}>
          {myPostScreen && (
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
              <Text style={{ marginHorizontal: 40 }}>
                <FontAwesome5Icon
                  name="pen"
                  size={16}
                  color={"darkblue"}
                  onPress={() => {
                    setPost(post), setModalVisible(true);
                  }}
                />{" "}
              </Text>
              <Text style={{ textAlign: "right" }}>
                <FontAwesome5Icon
                  name="trash"
                  size={16}
                  color={"red"}
                  onPress={() => handleDeletePrompt(post?._id)}
                />{" "}
              </Text>
            </View>
          )}
          <Text style={styles.title}>Title: {post?.title}</Text>
          <Text style={styles.desc}>{post?.description}</Text>
          <View style={styles.footer}>
            {post?.postedBy?.name && (
              <Text>
                <FontAwesome5Icon name="user" color={"orange"} />{" "}
                {post?.postedBy?.name}
              </Text>
            )}

            <Text>
              <FontAwesome5Icon name="clock" color={"orange"} />
              {"  "}
              {moment(post?.createdAt).format("DD/MM/YYYY")}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  heading: {
    color: "green",
    textAlign: "center",
  },
  card: {
    width: "97%",
    borderColor: "#ffffff",
    borderWidth: 0.2,
    borderColor: "gray",
    padding: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 10,
    borderBottomWidth: 0.3,
    paddingBottom: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  desc: {
    marginTop: 0,
  },
});

import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import moment from "moment/moment";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

const PostCard = ({ posts }) => {
  return (
    <View>
      <Text style={styles.heading}>Total Posts: {posts?.length}</Text>
      {posts?.map((post, i) => (
        <View style={styles.card} key={i}>
          <Text style={styles.title}>Title: {post?.title}</Text>
          <Text style={styles.desc}>{post?.description}</Text>
          <View style={styles.footer}>
            <Text>
              <FontAwesome5Icon name="user" color={"orange"} />{" "}
              {post?.postedBy?.name}
            </Text>
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

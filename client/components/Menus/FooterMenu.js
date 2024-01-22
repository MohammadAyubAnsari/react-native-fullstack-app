import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import FontAwsome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation, useRoute } from "@react-navigation/native";

const FooterMenu = () => {
  // hooks
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <FontAwsome5
          name="home"
          style={styles.iconStyle}
          color={route.name === "Home" && "orange"}
        />
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Post")}>
        <FontAwsome5
          name="plus-square"
          style={styles.iconStyle}
          color={route.name === "Post" && "orange"}
        />
        <Text>Post</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Myposts")}>
        <FontAwsome5
          name="list"
          style={styles.iconStyle}
          color={route.name === "Myposts" && "orange"}
        />
        <Text>My Posts</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Account")}>
        <FontAwsome5
          name="user"
          style={styles.iconStyle}
          color={route.name === "Account" && "orange"}
        />
        <Text>Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FooterMenu;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 30,
    justifyContent: "space-between",
  },
  iconStyle: {
    marginBottom: 3,
    alignSelf: "center",
  },
});

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import FontAwsome5 from "react-native-vector-icons/FontAwesome5";
const FooterMenu = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <FontAwsome5 name="home" style={styles.iconStyle} />
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwsome5 name="plus-square" style={styles.iconStyle} />
        <Text>Post</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwsome5 name="info-circle" style={styles.iconStyle} />
        <Text>About</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwsome5 name="user" style={styles.iconStyle} />
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

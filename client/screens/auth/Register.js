import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";

const Register = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Register</Text>
      <View style={{ marginHorizontal: 20 }}>
        <Text>NAME</Text>
        <TextInput style={styles.inputBox} placeholder="Enter your name" />
        <Text>EMAIL</Text>
        <TextInput style={styles.inputBox} placeholder="Enter your email" />
        <Text>PASSWORD</Text>
        <TextInput style={styles.inputBox} placeholder="Assign a password" />
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#789464",
  },
  pageTitle: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    color: "#202929",
    marginBottom: 20,
  },
  inputBox: {
    height: 40,
    marginBottom: 20,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginTop: 10,
    paddingLeft: 10,
    color: "green",
  },
});

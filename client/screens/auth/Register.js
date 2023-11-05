import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import InputBox from "../../components/Forms/InputBox";
import SubmitButton from "../../components/Forms/SubmitButton";

const Register = () => {
  // states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  //   functions as below
  //   handle button function
  const handleSubmit = () => {
    try {
      setLoading(true);
      if (!name || !email || !password) {
        setLoading(false);
        return Alert.alert("Please enter all details");
      }
      setLoading(false);
      console.log("Register Data ==>", { name, email, password });
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Register</Text>
      <View style={{ marginHorizontal: 20 }}>
        <InputBox
          inputTitle={"Name"}
          placeholder={"Enter your name"}
          value={name}
          setValue={setName}
        />
        <InputBox
          inputTitle={"Email"}
          placeholder={"Enter your email"}
          keyboardType="email-address"
          autoComplete="email"
          value={email}
          setValue={setEmail}
        />
        <InputBox
          inputTitle={"Password"}
          placeholder={"Assign a password"}
          secureTextEntry={true}
          autoComplete="password"
          value={password}
          setValue={setPassword}
        />
      </View>
      {/* <Text>{JSON.stringify({ name, email, password }, null, 4)}</Text> */}
      <SubmitButton
        btnTitle="Register"
        loading={loading}
        handleSubmit={handleSubmit}
      />
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

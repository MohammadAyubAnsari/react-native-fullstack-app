import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import React, { useContext, useState } from "react";
import InputBox from "../../components/Forms/InputBox";
import SubmitButton from "../../components/Forms/SubmitButton";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../context/authContext";

const Login = ({ navigation }) => {
  // global state
  const [state, setState] = useContext(AuthContext);
  // states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  //   functions as below
  //   handle button function
  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (!email || !password) {
        setLoading(false);
        return Alert.alert("Please enter all details");
      }
      setLoading(false);
      const { data } = await axios.post("/auth/login", { email, password });
      setState(data);
      alert(data && data.message);
      navigation.navigate("Home");
      await AsyncStorage.setItem("@auth", JSON.stringify(data));
      console.log("Login Data ==>", { email, password });
    } catch (err) {
      alert(err.response.data.message);
      setLoading(false);
      console.log(err);
    }
  };

  // temp function to check local storage data
  const getLocalStorageData = async () => {
    let data = await AsyncStorage.getItem("@auth");
    console.log("Local Storage ==>", data);
  };
  getLocalStorageData();
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Log In</Text>
      <View style={{ marginHorizontal: 20 }}>
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
          placeholder={"Enter password"}
          secureTextEntry={true}
          autoComplete="password"
          value={password}
          setValue={setPassword}
        />
      </View>
      {/* <Text>{JSON.stringify({ name, email, password }, null, 4)}</Text> */}
      <SubmitButton
        btnTitle="Login"
        loading={loading}
        handleSubmit={handleSubmit}
      />
      <Text style={styles.linkText}>
        Create Account? Please{" "}
        <Text
          style={styles.link}
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </Text>
      </Text>
    </View>
  );
};

export default Login;

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
  linkText: {
    textAlign: "center",
  },
  link: {
    color: "red",
    fontSize: 15,
    fontStyle: "italic",
    fontWeight: "bold",
  },
});

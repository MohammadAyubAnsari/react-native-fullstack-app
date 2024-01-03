import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
// context
const AuthContext = createContext();

// provider
const AuthProvider = ({ children }) => {
  // global State
  const [state, setState] = useState({
    user: null,
    token: "",
  });

  //   initial localStorage Data
  useEffect(() => {
    const loadLocalStorageData = async () => {
      try {
        let data = await AsyncStorage.getItem("@auth");
        let loginData = JSON.parse(data);
        setState({ ...state, user: loginData?.user, token: loginData?.token });
      } catch (err) {}
    };
    loadLocalStorageData();
  }, []);

  //   default axios setting
  let token = state && state.token;
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  axios.defaults.baseURL = "http://192.168.29.90:5100/api/v1";

  return (
    <AuthContext.Provider value={[state, setState]}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

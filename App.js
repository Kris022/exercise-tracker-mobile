import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Text,
  View,
} from "react-native";

import LoginScreen from "./screens/LoginScreen";

export default function App() {

  return (
    <LoginScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "white",
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
  },
  myText: {
    color: "white",
    fontSize: 18,
  },
});

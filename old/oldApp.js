import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Text,
  View,
} from "react-native";

export default function App() {
  const [workout, setWorkout] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch("https://catfact.ninja/breeds");
        const json = await response.json();

        if (response.ok) {
          setWorkout(json.data);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={workout}
          keyExtractor={(item) => Math.random()}
          renderItem={({ item }) => <Text>{item.breed}</Text>}
        />
      )}
      <Text style={styles.myText}>hello</Text>
      <StatusBar style="auto" />
    </View>
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

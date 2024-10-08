import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Input from "./Input"; // Importing the reusable Input component

export default function App() {
  const [name, setName] = useState("");
  const [nim, setNim] = useState("");

  const handleNameChange = (value) => {
    setName(value);
  };

  const handleNimChange = (value) => {
    // Ensuring only numeric input
    if (/^\d*$/.test(value)) {
      setNim(value);
    }
  };

  return (
    <View style={styles.container}>
      <Text>{name} - {nim}</Text>
      <Input
        label="Name"
        placeholder="Input Your Name"
        value={name}
        onChangeText={handleNameChange}
      />
      <Input
        label="NIM"
        placeholder="Input Your NIM"
        value={nim}
        onChangeText={handleNimChange}
        keyboardType="numeric"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

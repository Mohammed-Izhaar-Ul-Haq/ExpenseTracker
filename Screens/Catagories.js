import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Modal, Pressable } from "react-native";
import { Button, TextInput } from "react-native-web";
import CatagoryCard from "../Components/CatagoryCard";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Catagories() {
  const [catagory, setCatagory] = useState("");

  const addCatagory = async () => {
    try {
      const existingCatagories = await AsyncStorage.getItem("catagory");
      let catagories = [];
      if (existingCatagories) {
        try {
          catagories = JSON.parse(existingCatagories);
        } catch (err) {
          console.log("Invalid JSON:", existingCatagories);
        }
      }
      if (catagory != "") {
        catagories.push(catagory);
      }
      await AsyncStorage.setItem("catagory", JSON.stringify(catagories));
      console.log(JSON.stringify(catagories));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Text>Catagories Screen</Text>
        <CatagoryCard/>
        <TextInput
          placeholder="Enter Catagory"
          value={catagory}
          onChangeText={setCatagory}
        />
        <Button title="Add Catagory" onPress={addCatagory} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

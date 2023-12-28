import React from "react";
import { Button, Text, TextInput, View } from "react-native-web";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import SelectDropdown from "react-native-select-dropdown";

export default function ExpenseForm() {
  const [amount, setAmount] = React.useState("");
  const [catagory, setCatagory] = React.useState("");

  const Catagories = ["Food", "Travel", "Shopping", "Bills", "Others"];

  const handleAmount = async () => {
    try {
      await AsyncStorage.setItem("amount", amount);
    } catch (err) {
      console.log(err);
    }
  };

  const getAmount = async () => {
    try {
      const amount = await AsyncStorage.getItem("amount");
      console.log(amount);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCatagory = async () => {
    try {
      await AsyncStorage.setItem("catagory", Catagories);
    } catch (err) {
      console.log(err);
    }
  };

  const getCatagory = async () => {
    try {
      const catagory = await AsyncStorage.getItem("catagory");
      console.log(JSON.stringify(catagory));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View>
      <Text>ExpenseForm Screen</Text>
      <TextInput
        placeholder="Enter Amount"
        value={amount}
        onChangeText={setAmount}
      />
      <Button title="set Amount" onPress={handleAmount} />
      <Button title="get Amount" onPress={getAmount} />
      {/* <SelectDropdown
        data={Catagories}   
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item;
        }}
      /> */}
          <Button title="set Catag" onPress={handleCatagory} />
       <Button title="get Catag" onPress={getCatagory} />
    </View>
  );
}

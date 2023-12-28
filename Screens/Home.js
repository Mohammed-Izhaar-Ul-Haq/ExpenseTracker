import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import ExpenseForm from "../Components/ExpenseForm";
import CatagoryCard from "../Components/CatagoryCard";
import ExpenseCard from "../Components/ExpenseCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "react-native-web";
import { Picker } from "@react-native-picker/picker";

export default function Home() {
  const [amount, setAmount] = useState("initial");
  const [catagory, setCatagory] = useState("");
  const [categories, setCategories] = useState([]);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const getCatagory = async () => {
      try {
        const categories = await AsyncStorage.getItem("catagory");
        if (categories != null) {
          setCategories(JSON.parse(categories));
        }
      } catch (err) {
        console.log(err);
      }
    };
    getCatagory();
  }, []);
  const newExpense = async () => {
    try {
      const existingExpenses = await AsyncStorage.getItem("expenses");
      let expensesArray = [];
      if (existingExpenses) {
        try {
          const parsedExpenses = JSON.parse(existingExpenses);
          if (Array.isArray(parsedExpenses)) {
            expensesArray = parsedExpenses;
          }
        } catch (err) {
          console.log("Invalid JSON:", existingExpenses);
        }
      }
      if (amount !== "") {
        expensesArray.push({ amount: amount, catagory: catagory });
      }
      await AsyncStorage.setItem("expenses", JSON.stringify(expensesArray));
      console.log(JSON.stringify(expensesArray));
    } catch (err) {
      console.log(err);
    }
  };
  const getExpense = async () => {
    try {
      const expenses = await AsyncStorage.getItem("expenses");
      console.log(expenses);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      {/* <ExpenseForm/> */}
      <ExpenseCard/>
      <TextInput title="Add amount" value={amount} onChangeText={setAmount} />
      <Picker
        selectedValue={catagory}
        onValueChange={(itemValue) => setCatagory(itemValue)}
      >
        {categories.map((item, index) => {
          return <Picker.Item key={index} label={item} value={item} />;
        })}
      </Picker>
      <Button title="+" onPress={newExpense} />
      <Button title="Exp" onPress={getExpense} />
      {/* <Button title="get Cat" onPress={getCatagory} /> */}
    </View>
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

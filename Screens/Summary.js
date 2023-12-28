import React from "react";
import { StyleSheet, Text, View,Button} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState,useEffect } from "react";


export default function Summary() {
const [amount, setAmount] = useState("");
const [expenses, setExpenses] = useState([]);
const [total, setTotal] = useState(0);

useEffect(() => {
    const getExpense = async () => {
        try {
            const expenses = await AsyncStorage.getItem("expenses");
            if (expenses != null) {
                setExpenses(JSON.parse(expenses));
            }
        } catch (err) {
            console.log(err);
        }
    };
    getExpense();
}
, []);

expenses.map(expense => console.log(expense.amount));
    return (
        <View style={styles.container}>
        <Text>Summary Screen</Text>
        {/* <Button title="get Amount" onPress={getAmount} /> */}
        

        </View>
    );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: 'center',
    },
});

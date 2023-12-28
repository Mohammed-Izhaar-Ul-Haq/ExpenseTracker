import React from "react";
import { Text, View, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState,useEffect } from "react";

export default function ExpenseCard() {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const getExpense = async () => {
            try {
                const expenses = await AsyncStorage.getItem("expenses");
                alert(expenses);
                if (expenses != null) {
                    setExpenses(JSON.parse(expenses));
                }
            } catch (err) {
                console.log(err);
            }
        };
        getExpense();
    }, []);


    return (
        <View style={styles.container}>
        <View style={styles.cardHolder}>
            {
                expenses.map((item, index) => (
                    <View style={styles.card} key={index}>
                        <Text style={styles.text}>Amount: {item.amount}</Text>
                        <Text style={styles.text}>Catagory: {item.catagory}</Text>
                    </View>
                ))
            }
        </View>
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
    cardHolder: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    card: {
        width: "48%", // Adjust the width as per your requirement
        height: 100,
        backgroundColor: "grey",
        flexDirection: "row",
        marginBottom: 10, // Add some margin between cards
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
    },
});
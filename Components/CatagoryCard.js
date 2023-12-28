import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native-web";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CatagoryCard(props) {
    // const Catag = ["Food", "Transportation", "Entertainment", "Health", "Education", "Other"];
    const [catagory, setCatagory] = useState([]);

 useEffect(() => {
    const getCatagory = async () => {
      try {
        const categories = await AsyncStorage.getItem("catagory");
        if (categories != null) {
          setCatagory(JSON.parse(categories));
        //   alert(JSON.stringify(categories));
        }
      } catch (err) {
        console.log(err);
      }
    };
    getCatagory();

    }, []);

    return (
        // <View style={styles.container}>
            <ScrollView >
            <View style={styles.cardHolder}>
                {catagory.map((item, index) => (
                    <View style={styles.card} key={index}>
                        <Text style={styles.text}>{item}</Text>
                    </View>
                ))}
            </View>
        {/* </View> */}
        </ScrollView>
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
 

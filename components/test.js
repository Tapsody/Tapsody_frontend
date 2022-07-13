import React from "react";
import { StyleSheet, Text, View } from "react-native";


const Testing = (props) => {
    console.log("props ",props.children);
    return (
        <View>
            <Text style = {styles.testing}>{props.children[0]}</Text>
        </View>
    )
}

export { Testing };

const styles = StyleSheet.create({
    testing: {
        fontSize: 20,
        color: "black",
    }
});

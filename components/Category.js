import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";


const Category = (props) => {
  return (
    <View style = {styles.wrapper}>
        <TextInput 
        style = {styles.input}
        placeholder = {props.children} />
    </View>
  )
}

export { Category };

const styles = StyleSheet.create({
    wrapper: {
        width: "80%",
        height: "10%",
        margin: "1%",
    },
    input: {
        color: "white",
        width: "100%",
        height: "100%",
        borderBottomWidth: 3,
        borderColor: "white",
        margin: "2%",
        padding: "1%"
    }
}); 

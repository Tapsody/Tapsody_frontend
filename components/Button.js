import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity} from "react-native";


const SignButton = (props) => {
    return(
        <TouchableOpacity
        style = {styles.buttonBody}
        onPress = {props.onPress}>
        <Text style = {styles.buttonText}>{props.children}</Text>
        </TouchableOpacity>
    )
}

export { SignButton };

const styles = StyleSheet.create({
  buttonBody: {
    backgroundColor: "#8146FF",
    width: "70%",
    height: "1%",
    padding: 20,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    marginTop: "25%"
  },
  buttonText: {
    color: "white",
    fontSize: 12,
    fontWeight: "600"
  }
});

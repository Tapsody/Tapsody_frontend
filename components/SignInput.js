import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SignInput = (props) => {
  
  return (
    <View style={[styles.inputBody, styles.centered]}>
      <Text style={{ color: "white", fontSize: 30 }}>Please Sign Up</Text>
      <TextInput/>
    </View>
  )
}

export { SignInput };

const styles = StyleSheet.create({
  inputBody: {
    width: "80%",
    height: "70%",
    marginBottom: "5%"
  },
  input: {
    width: "80%",
    height: "10%",
    color: "white",
    padding: 8,
    margin: 10,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 10
  },
  centered: {
    justifyContent: "center",
    alignItems: "center",
  }  

});


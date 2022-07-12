import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity } from "react-native";
import { SignButton } from "../components/Button"

const SignUp = () => {
  const [mail, setMail] = useState("testMail");
  const [password, setPass] = useState("testPass");
  const pressHandler = () => {
    navigation.navigate("SignIn");
    }
  return(
    <SafeAreaView style = {[styles.container , styles.centered]}>
        <View style = {styles.signPage}>
          <ImageBackground 
          source = {require('../assets/sign-background.png')} 
          style = {[styles.image, styles.centered]}>
            <View style = {[styles.inputBody, styles.centered]}>
              <Text style = {{color: "white", fontSize: 30}}>Please Sign Up</Text>
              <TextInput 
                  style = {styles.input}
                  placeholder = "Your email"
                  onChangeText = {(val) => setMail(val)}/>
              <TextInput 
                  style = {styles.input}
                  placeholder = "Your password"
                  onChangeText = {(val) => setPass(val)}/>
                  <SignButton>Sign in</SignButton>
            </View>
            <Text style = {{color: "rgba(255, 255, 255, 0.6)"}}>Already have an account?</Text> 
            <TouchableOpacity>
                <Text style = {{color: "white"}} onPress = {pressHandlerc }>Sign In</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
    </SafeAreaView>
  );
}
export { SignUp };

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  image: {
    flex: 1
  },
  input: {
    width: "80%",
    height: "10%",
    color: "white",
    padding: 8,
    margin: 20,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 10
  },
  signPage: {
    flex: 1,
    width: "40%"
  },
  inputBody: {
    width: "80%",
    height: "70%",
    top: "10%",
    marginBottom: "5%"
  },
  centered: {
    justifyContent: "center",
    alignItems: "center",   
  } 
});

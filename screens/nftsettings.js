import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity } from "react-native";
import { SignButton } from "../components/Button"
import { Category } from "../components/Category"

const NFTSettings = (props) => {
    return (
        
        <SafeAreaView style={[styles.container, styles.centered]}>
            <ImageBackground
            source={require("../assets/settings-background.png")}
            style = {[styles.background, styles.centered]}>

                <Text style = {styles.header}>NFT application</Text>    
                <Category>Name</Category>
                <Category>Phone</Category>
                <Category>Email</Category>
                <Category>NFT type (audio/picture/video)</Category>
                <Text style = {styles.subtext}>
                    *By providing this information, 
                    you are giving us permission to contact you regarding the NFT application.
                </Text>
                <SignButton>Submit</SignButton>

            </ImageBackground>
        </SafeAreaView>

    )
}
export { NFTSettings };

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
    },
    centered: {
        justifyContent: "center",
        alignItems: "center",
    },
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
        borderColor: "white"
    },
    header: {
        width: "80%",
        color: "white",
        fontSize: "40px",
        marginBottom: "5%",
        borderBottomWidth: 5,
        borderColor: "white",
        textAlign: "center"
    },
    subtext: {
        color: "white",
        fontSize: 10,
    },
    background: {
        width: "100%",
        height: "100%"
    }
});

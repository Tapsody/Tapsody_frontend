import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, View, TextInput, SafeAreaView } from "react-native";
import Navigator from "./routes/homeStack"
import { Testing } from "./components/test"

export default function App() {
  return (
    // <Testing>
    //   <Text>Hello sir</Text>
    //   <Text>Second test</Text>
    // </Testing>
    <Navigator />
  );
}


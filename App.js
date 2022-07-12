import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, View, TextInput, SafeAreaView } from "react-native";
import  Navigator  from "./routes/homeStack"

export default function App(){
  const [mail, setMail] = useState("testMail");
  const [password, setPass] = useState("testPass");

  return(
    <Navigator />
  );
}


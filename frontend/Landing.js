import React from "react";
import { Text, View, Pressable } from "react-native";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import AppDesc from "./AppDesc";
import { useState } from "react";
import styles from "./StyleLanding.js";

const Landing = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const toggleDisplay = () => {
    setShowSignUp(!showSignUp);
  };
  return (
    <View style={styles.container}>
      {showSignUp ? (
        <SignUp toggleDisplay={toggleDisplay} />
      ) : (
        <SignIn toggleDisplay={toggleDisplay} />
      )}
    </View>
  );
};
export default Landing;

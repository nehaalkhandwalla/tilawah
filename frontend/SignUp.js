import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  Alert,
} from "react-native";
import { supabase } from "./supabase";
import styles from "./StyleSignUp.js";
import { KeyboardAvoidingView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ScrollView } from "react-native-gesture-handler";
import { Platform } from "react-native";
import AppDesc from "./AppDesc.js";

const SignUp = ({ toggleDisplay }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  const handleSignUp = async () => {
    // Sign up with email and password, and include username in user_metadata
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username: username,
        },
      },
    });
    if (error) {
      console.log(error);
      Alert.alert("Error", error.message);
    } else {
      Alert.alert("Success", "Check your email for the confirmation link.");
      setEmail("");
      setPassword("");
      setUsername("");
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20} // Adjust as needed
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <AppDesc />
        <View style={styles.card}>
          <Pressable
            onPress={toggleDisplay}
            style={({ pressed }) => [
              styles.button,
              {
                backgroundColor: pressed ? "#E5D3A5" : "#FFEBB8",
              },
            ]}
          >
            <Text style={styles.text}>Back to Sign In</Text>
          </Pressable>
          <View style={styles.create}>
            <Text style={styles.createAccount}>Create an Account</Text>
            <TextInput
              style={styles.input}
              onChangeText={setUsername}
              placeholder="Username"
              placeholderTextColor={"#B2A480"}
              value={username}
            />
            <TextInput
              style={styles.input}
              onChangeText={setEmail}
              placeholder="Email"
              placeholderTextColor={"#B2A480"}
              value={email}
            />
            <TextInput
              style={styles.input}
              onChangeText={setPassword}
              placeholder="Password"
              placeholderTextColor={"#B2A480"}
              secureTextEntry={true}
              value={password}
              onBlur={() => {
                if (!password) {
                  alert("Password is required.");
                }
              }}
            />
            <Pressable
              onPress={handleSignUp}
              style={({ pressed }) => [
                styles.smallerButton,
                {
                  backgroundColor: pressed ? "#E5D3A5" : "#FFEBB8",
                },
              ]}
            >
              <Text style={styles.text}>Sign Up</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;

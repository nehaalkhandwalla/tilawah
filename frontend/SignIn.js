import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  Alert,
} from "react-native";
import styles from "./StyleSignIn";
import { supabase } from "./supabase";
import AppDesc from "./AppDesc";
import { KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Platform } from "react-native";
// import { Alert } from "react-native";

const SignIn = ({ toggleDisplay }) => {
  // const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [message, setMessage] = React.useState("");

  // async function signIn(email, password) {
  //   const { user, session, error } = await supabase.auth.signIn({
  //     email,
  //     password,
  //   });

  //   if (error) throw error;
  //   return { user, session };
  // }

  const handleSignIn = async (email, password, username) => {
    try {
      const { user, session, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        // console.error("Sign in error:", error.message);
        setMessage(error.message);
        // Handle sign-in error
      } else {
        setMessage("Signed in successfully:", username);
        // Redirect user to another page
      }
    } catch (error) {
      // console.error("Sign in error:", error.message);
      setMessage(error.message);
      // Handle sign-in error
    }
  };

  const handleSignInButtonPress = () => {
    // Call handleSignIn function with email and password
    handleSignIn(email, password);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20} // Adjust as needed
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <AppDesc />
        {/* <View style={styles.container}> */}
        <View style={styles.card}>
          <View>
            <Text style={styles.signIn}>Sign In</Text>
            {/* <Alert message={message} /> */}
            {message && alert(message)}
            {/* {message ? <Text style={styles.message}>{message}</Text> : null} */}
            <TextInput
              style={styles.input}
              onChangeText={setEmail}
              placeholder="email"
              placeholderTextColor={"#FFEBB8"}
              value={email}
            />
            <TextInput
              style={styles.input}
              onChangeText={setPassword}
              value={password}
              placeholderTextColor={"#FFEBB8"}
              secureTextEntry={true}
              placeholder="password"
            />
            <Pressable
              onPress={handleSignInButtonPress}
              style={({ pressed }) => [
                styles.smallerButton,
                {
                  backgroundColor: pressed ? "#E5D3A5" : "#FFEBB8",
                },
              ]}
              // onPress={handleSignInButtonPress}
            >
              <Text style={styles.text}>Sign In</Text>
            </Pressable>
          </View>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              {
                backgroundColor: pressed ? "#E5D3A5" : "#FFEBB8",
              },
            ]}
            onPress={toggleDisplay}
          >
            <Text style={styles.text}>Create an account</Text>
          </Pressable>
        </View>
        {/* </View> */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;

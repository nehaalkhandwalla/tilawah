import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { supabase } from "./supabase";
import { useEffect } from "react";
import styles from "./StyleApp.js";
import AppDesc from "./AppDesc";
import SignIn from "./SignIn";
import User from "./User";
import SignUp from "./SignUp";
import Home from "./Home";
import Landing from "./Landing";
import QuizMe from "./QuizMe";
import QuizCarousel from "./QuizCarousel";
import TestMe from "./TestMe.js";
import Rec from "./RecButton.js";
import Surahs from "./Surahs.js";
import Register from "./Register";
import React, { useState } from "react";
import Memorise from "./Memorise.js";
import FinishMemorise from "./FinishMemorise.js";
import FinalScore from "./FinalScore.js";

const Stack = createStackNavigator();

export default function App() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const [session, setSession] = useState(null);


  const toggleDisplay = () => {
    setShowSignUp(!showSignUp);
  };

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      // console.log("Session", session);
    });

    // Fetch the initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      // console.log("Session2", session);
    });
  }, []);

  return (
    // <View>
    <NavigationContainer>
      <StatusBar style="inverted" backgroundColor="#191712" />
      {session ? (
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#191712",
              borderBottomColor: "#FFEBB8", // Change this to the desired color
              borderBottomWidth: 0.5, // Change this to the desired thickness
            },
            headerTitleStyle: {
              color: "#FFEBB8",
            },
            // headerShown: false, // Hide the header if you don't want it
            cardStyle: { backgroundColor: "#191712" }, // Set the background color
            headerTintColor: "#FFEBB8",
          }}
        >
          {/* <StatusBar style="auto" backgroundColor="#abcdef" /> */}
          {/* <Stack.Screen name="SignIn" component={SignIn} /> */}
          <Stack.Screen name="Home" options={{headerShown: false}}>
          {props => <Home {...props} session={session} />}
          </Stack.Screen>
          <Stack.Screen name="Memorise" component={Memorise} />
          <Stack.Screen name="Surahs" component={Surahs} />
          {/* <Stack.Screen name="User" component={User} session={session}/> */}

          <Stack.Screen name="User">
          {props => <User {...props} session={session} />}
          </Stack.Screen>

          <Stack.Screen name="FinishMemorise" component={FinishMemorise} />
          <Stack.Screen name="QuizMe" component={QuizMe} />
          <Stack.Screen name="QuizCarousel" component={QuizCarousel} />
          <Stack.Screen name="FinalScore" component={FinalScore} />
          <Stack.Screen name="TestMe" component={TestMe} />

        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#191712",
              borderBottomColor: "#FFEBB8", // Change this to the desired color
              borderBottomWidth: 0.5, // Change this to the desired thickness
            },
            headerTitleStyle: {
              color: "#FFEBB8",
            },
            // headerShown: false, // Hide the header if you don't want it
            cardStyle: { backgroundColor: "#191712" }, // Set the background color
            headerTintColor: "#FFEBB8",
          }}
        >
          <Stack.Screen name="Landing" component={Landing} options={{headerShown: false}} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

import React, { useState } from "react";
import styles from "./StyleHome.js";
import { Text, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

// const Stack = createStackNavigator();

const Home = ({ session, navigation }) => {
  console.log("session2", session.user.user_metadata.username);
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.settingIcon,
          {
            color: pressed ? "#E5D3A5" : "#FFEBB8",
          },
        ]}
        onPress={() => navigation.navigate("User")}
      >
        <Ionicons name="settings" size={30} color={"#FFEBB8"} />
      </Pressable>
      <View>
        <Text style={styles.title}>Welcome {session.user.user_metadata.username}!</Text>
      </View>
      <View>
        {/* <Pressable
          style={({ pressed }) => [
            styles.button,
            {
              backgroundColor: pressed ? "#332F24" : "#4C4637",
            },
          ]}
          onPress={() => navigation.navigate("Surahs")}
        >
          <Text style={styles.text}>Surah Index</Text>
        </Pressable> */}
        <Pressable
          //   onPress={() => navigation.navigate("Memorise")}
          style={({ pressed }) => [
            styles.button,
            {
              backgroundColor: pressed ? "#332F24" : "#4C4637",
            },
          ]}
          onPress={() => navigation.navigate("Surahs", {action: "memorise"})}
        >
          <Text style={styles.text}>Memorise</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            {
              backgroundColor: pressed ? "#332F24" : "#4C4637",
            },
          ]}
          onPress={() => navigation.navigate("Surahs", {action: "test"})}
        >
          <Text style={styles.text}>Test Me</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            {
              backgroundColor: pressed ? "#332F24" : "#4C4637",
            },
          ]}
          onPress={() => navigation.navigate("QuizMe")}
        >
          <Text style={styles.text}>Quiz Me</Text>
        </Pressable>
      </View>
    </View>
  );
};
export default Home;

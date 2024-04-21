import React from "react";
import styles from "./StyleSurahs.js";
import { Text, View, Pressable } from "react-native";

const SurahComponent = ({ number, surah, onPress }) => {
  return (
    <View style={styles.surahContainer}>
      <Text style={styles.index}> {number}</Text>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          {
            backgroundColor: pressed ? "#332F24" : "#4C4637",
          },
        ]}
        onPress={() => onPress(number, surah)} // Pass the number and name on press
      >
        <Text style={styles.text}>{surah}</Text>
      </Pressable>
    </View>
  );
};
export default SurahComponent;

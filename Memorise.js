import React from "react";
import styles from "./StyleMemorise.js";
import RecButton from "./RecButton.js";
import { Audio } from "expo-av";
import AyahAudioPlayer from "./AyahAudioPlayer";
import {
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  Pressable,
} from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";

function Memorise({ navigation, route }) {
  const { surahNumber } = route.params;
  console.log(surahNumber);
  const [isLoading, setIsLoading] = useState(true);
  const [ayahs, setAyahs] = useState([]);
  const [surahName, setSurahName] = useState(null);
  // const surahNumber = 1; // Change to the desired Surah number
  const specialSequence =
    "\u0628\u0650\u0633\u06e1\u0645\u0650 \u0671\u0644\u0644\u0651\u064e\u0647\u0650 \u0671\u0644\u0631\u0651\u064e\u062d\u06e1\u0645\u064e\u0640\u0670\u0646\u0650 \u0671\u0644\u0631\u0651\u064e\u062d\u0650\u06cc\u0645\u0650\n";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://api.alquran.cloud/v1/surah/${surahNumber}`
        );
        setSurahName(response.data.data.name);
        // setSurahName;
        setAyahs(response.data.data.ayahs);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const playAudio = async (ayahNumber) => {
    try {
      const audioUrl = `http://api.alquran.cloud/v1/ayah/${ayahNumber}/ar.alafasy`;
      const { sound } = await Audio.Sound.createAsync({ uri: audioUrl });
      await sound.playAsync();
    } catch (error) {
      console.error("Error playing audio:", error);
    }
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#FFEBB8" />
        <Text>"Welcome Back!</Text>
      </View>
    );
  }

  return (
    <View>
      {/* <Pressable onPress={() => navigation.navigate("Home")}>
        <Text style={styles.nav}> Home </Text>
      </Pressable> */}
      <Text style={styles.title}>{`${surahName}`}</Text>
      <View style={styles.container}>
        <ScrollView style={styles.scrolly}>
          {surahNumber !== 9 && surahNumber !== 1 ? (
            <Text style={styles.arabictext}>{specialSequence}</Text>
          ) : null}
          {ayahs.map((ayah, index) => (
            <View style={styles.verseWaudio} key={index}>
              {/* {surahNumber !== 1 && ayah.text.includes(specialSequence) ? (
                <View style={styles.specialSequenceContainer}>
                  <Text style={styles.specialSequence}>
                    {specialSequence.trim()}
                  </Text>
                </View>
              ) : null} */}
              {/* {surahNumber !== 9 ? (
                <Text style={styles.arabictext}>{specialSequence}</Text>
              ) : null} */}

              <View style={styles.ayah}>
                {ayah.text.split(" ").map((word, wordIndex) => (
                  <Text key={wordIndex} style={styles.arabictext}>
                    {word}
                  </Text>
                ))}
                <Text style={styles.arabictext}>{"\u06dd"}</Text>
              </View>
              <Pressable>
                <AyahAudioPlayer ayahNumber={`${ayah.number}`} />
              </Pressable>
            </View>
          ))}
        </ScrollView>
        <View style={styles.bottom}>
          <Pressable style={styles.button}>
            <RecButton />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
export default Memorise;

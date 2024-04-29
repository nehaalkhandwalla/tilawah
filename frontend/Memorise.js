import React from "react";
import styles from "./StyleMemorise.js";
import RecButton from "./RecButton.js";
import { Audio } from "expo-av";
import AyahAudioPlayer from "./AyahAudioPlayer";
import FinishMemorise from "./FinishMemorise";

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
  const [selectedAyah, setSelectedAyah] = useState(null);
  const [buttonShadowColor, setButtonShadowColor] = useState("#FFEBB8");
  const [similarity, setSimilarity] = useState(0);
  const [transcriptions, setTranscriptions] = useState([]); 
  const { surahNumber } = route.params;
  console.log(surahNumber);
  const [isLoading, setIsLoading] = useState(true);
  const [ayahs, setAyahs] = useState([]);
  const [surahName, setSurahName] = useState(null);
  const [ayahRepetitions, setAyahRepetitions] = useState({}); // Initialize with an empty object to track repetitions for each ayah
  const specialSequence =
    "\u0628\u0650\u0633\u06e1\u0645\u0650 \u0671\u0644\u0644\u0651\u064e\u0647\u0650 \u0671\u0644\u0631\u0651\u064e\u062d\u06e1\u0645\u064e\u0640\u0670\u0646\u0650 \u0671\u0644\u0631\u0651\u064e\u062d\u0650\u06cc\u0645\u0650\n";
  const handleSimilarity = (sim) => {
    setSimilarity(sim);
  };

  useEffect(() => {
    console.log("Similarity updated:", similarity);
  }, [similarity]);

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
        // Initialize ayah repetitions with 3 for each ayah
        const repetitions = {};
        response.data.data.ayahs.forEach((ayah) => {
          repetitions[ayah.number] = 3;
        });
        setAyahRepetitions(repetitions);
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

  const handlePressIn = () => {
    setButtonShadowColor("red");
  };

  const handlePressOut = () => {
    setButtonShadowColor("#FFEBB8");
  };

  const handleTranscriptionReceived = (transcriptionData) => {
    const [transcription, receivedSimilarity, ayahNumber] = transcriptionData;
    // Append the new transcription to the existing list of transcriptions
    setTranscriptions((prevTranscriptions) => [
      ...prevTranscriptions,
      { transcription: transcriptionData[0], similarity: transcriptionData[1] },
    ]);
    // Decrease ayah repetitions if similarity is above 70
    console.log("AYAH REPETITIONS for ayah ",transcriptionData[2].numberInSurah, " = ", ayahRepetitions);
    if (transcriptionData[1] > 70) {
      setAyahRepetitions((prevRepetitions) => {
        return {
          ...prevRepetitions,
          [ayahNumber]: Math.max(prevRepetitions[ayahNumber] - 1, 0), // Decrease repetitions by 1, but keep it at 0 if it's already 0
          
        };
      });
    }

    // Check if all ayah repetitions are 0
    const allRepetitionsZero = Object.values(ayahRepetitions).every(
      (repetition) => repetition === 0
    );
    if (allRepetitionsZero) {
      console.log("All repetitions are 0, navigating to FinishMemorise");
      navigation.navigate("FinishMemorise");
    }
  };



  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#FFEBB8" />
        <Text style={styles.arabictext}>Loading your surah :D</Text>
      </View>
    );
  }

  return (
    <View>
      <Text style={styles.title}>{`${surahName}`}</Text>
      <View style={styles.container}>
        <ScrollView style={styles.scrolly}>
          {surahNumber !== 9 && surahNumber !== 1 ? (
            <Text style={styles.arabictext}>{specialSequence}</Text>
          ) : null}
          {ayahs.map((ayah, index) => (
            <View style={styles.verseWaudio} key={index}>
              

              <Pressable style={[styles.ayah, selectedAyah === ayah]} onPress={() => setSelectedAyah(ayah)}>
                {ayah.text.split(" ").map((word, wordIndex) => (
                  <Text key={wordIndex} style={[styles.arabictext, selectedAyah === ayah && styles.boldText]}>
                    {word}
                  </Text>
                ))}
                <Text style={[styles.arabictext, selectedAyah === ayah && styles.boldText]}>{"\u06dd"}</Text>
              </Pressable>
              <Text style={styles.arabictext}>Remaining Repetitions: {ayahRepetitions[ayah.number]}</Text>
              <Pressable>
                <AyahAudioPlayer ayahNumber={`${ayah.number}`} />
              </Pressable>
            </View>
          ))}
        </ScrollView>
        <View style={styles.bottom}>
          <View style={styles.transcriptions}>
                  <Text style={styles.text}>Transcriptions</Text>
                  <ScrollView style={styles.scrollyTranscriptions} contentContainerStyle={{ alignItems: 'flex-end' }}>
                  {/* Map over the transcriptions array to display each transcription */}
                  {/* // Rendering logic for transcriptions */}
                  {transcriptions.length === 0 ? 
                    (
                      <Text style={styles.placeholder}>Transcriptions will appear here</Text> 
                    ):
                    (
                      transcriptions.map((item, index) => 
                        (
                          <Text 
                            key={index} 
                            style={[
                              styles.arabictextTranscription, 
                              item.similarity !== undefined && item.similarity > 70 ? { color: 'green' } : (item.similarity > 25 ? { color: 'orange' } : { color: 'red' })
                            ]}
                          >
                            {item.transcription}
                          </Text>
                        )
                      )
                    )
                  }

        </ScrollView>
                  
          </View>
          <Pressable style={[styles.button, { shadowColor: buttonShadowColor }]}>
            <RecButton 
            selectedAyah={selectedAyah}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut} 
            similarity={handleSimilarity}
            onTranscriptionReceived={handleTranscriptionReceived}
          />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
export default Memorise;

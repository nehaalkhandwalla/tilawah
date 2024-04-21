import React, { useState, useEffect } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Audio } from "expo-av";
import styles from "./StyleAyahAudioPlayer";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";

const AyahAudioPlayer = ({ ayahNumber }) => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loadingError, setLoadingError] = useState(false);
  const [audioData, setAudioData] = useState(null);

  console.log(ayahNumber);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://api.alquran.cloud/v1/ayah/${ayahNumber}/ar.alafasy`
        );
        setAudioData(response.data.data.audio);
        console.log(response.data.data.audio);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoadingError(true);
      }
    };
    fetchData();
  }, [ayahNumber]);

  useEffect(() => {
    if (audioData) {
      loadAudio();
    }
    // Unload audio when unmounting component
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [audioData]);

  const loadAudio = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        { uri: audioData },
        { shouldPlay: false },
        (status) => {
          if (status.didJustFinish) {
            sound.setPositionAsync(0); // Set position to the beginning
            setIsPlaying(false); // Set isPlaying to false when audio finishes
          }
        }
      );
      setSound(sound);
    } catch (error) {
      console.error("Error loading audio:", error);
      setLoadingError(true);
    }
  };

  const toggleAudio = async () => {
    try {
      if (sound) {
        if (isPlaying) {
          await sound.pauseAsync();
        } else {
          await sound.playAsync();
        }
        setIsPlaying(!isPlaying);
      }
    } catch (error) {
      console.error("Error toggling audio:", error);
    }
  };

  if (loadingError) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>
          Error loading audio. Please try again later.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={toggleAudio}>
        <Ionicons name={isPlaying ? "pause" : "play"} size={24} color="black" />
      </Pressable>
    </View>
  );
};

export default AyahAudioPlayer;

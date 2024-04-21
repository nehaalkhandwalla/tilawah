import React, { useState, useRef } from "react";
import { View, TouchableOpacity, Image, Animated, Alert } from "react-native";
import { Audio } from "expo-av";
import * as FileSystem from "expo-file-system";

const RecButton = ({ selectedAyah, onPressIn, onPressOut, similarity, onTranscriptionReceived  }) => {
  const [scaleAnim] = useState(new Animated.Value(1));
  const [simValue, setSimValue] = useState(0);
  console.log("Selected ayah: ", selectedAyah);
  const [isRecording, setIsRecording] = useState(false);
  // const [transcription, setTranscription] = useState("");
  const recording = useRef(null);

  const handlePressIn = async () => {
    Animated.spring(scaleAnim, {
      toValue: 1.1,
      useNativeDriver: true,
    }).start();
    onPressIn(); // Call the parent component's onPressIn callback

    // Start recording
    try {
      console.log("Requesting permissions..");
      const { status } = await Audio.requestPermissionsAsync();
      if (status !== "granted") return;

      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        playThroughEarpieceAndroid: false,
      });

      console.log("Starting recording..");
      const recordingObject = new Audio.Recording();
      await recordingObject.prepareToRecordAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      await recordingObject.startAsync();
      recording.current = recordingObject;
      setIsRecording(true);
      console.log("Recording started");
    } catch (err) {
      console.error("Failed to start recording", err);
      Alert.alert("Failed to start recording");
    }
  };

  const handlePressOut = async () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
    onPressOut(); // Call the parent component's onPressOut callback

    // Stop recording
    if (!isRecording) return;
    try {
      console.log("Stopping recording..");
      await recording.current.stopAndUnloadAsync();
      setIsRecording(false);
      const uri = recording.current.getURI();
      console.log("Recording stopped and stored at", uri);
      // Convert the recorded audio to WAV format
      const wavFilePath = await convertToWav(uri);
      console.log("Converted to WAV format:", wavFilePath);
      // Send the WAV file to the server for transcription
      await sendRecordingToServer(wavFilePath);
    } catch (err) {
      console.error("Failed to stop recording", err);
      Alert.alert("Failed to stop recording");
    }
  };

  const convertToWav = async (uri) => {
    try {
      const wavFilePath = `${FileSystem.cacheDirectory}recording.wav`;
      await FileSystem.copyAsync({ from: uri, to: wavFilePath });
      return wavFilePath;
    } catch (err) {
      console.error("Failed to convert to WAV format", err);
      throw err;
    }
  };

  const sendRecordingToServer = async (uri) => {
    try {
      const formData = new FormData();
      const file = {
        uri: uri,
        name: "recording.wav",
        type: "audio/wav",
      };
      formData.append("file", file);

      const response = await fetch("http://10.47.3.245:8080/transcribe", {
        method: "POST",
        body: formData,
      });
      const responseBody = await response.json();
      console.log("Transcription:", responseBody.transcription);
      // setTranscription(responseBody.transcription);
      // console.log("Hello ", similarity);
      const simScore = calculateSimilarity(selectedAyah.text, responseBody.transcription);
      // console.log("Hello ", similarity);
      console.log('uwais woz ere');
      onTranscriptionReceived([responseBody.transcription, simScore, selectedAyah.number]);
      
      // console.log("simm :", similarity)
      
    } catch (error) {
      {selectedAyah === null ? Alert.alert("Please select an ayah") : Alert.alert("Failed to send recording to server")}
      // console.error("Failed to send recording to server:", error);
      // Alert.alert("Failed to send recording to server");
    }
  };

  const calculateSimilarity = (s1, s2) => {
    const longer = s1.length > s2.length ? s1 : s2;
    const shorter = s1.length > s2.length ? s2 : s1;
    const longerLength = longer.length;
    if (longerLength === 0) {
      similarity(100);
      return;
    }
    return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength) * 100;
    // let userSim = ((longerLength - editDistance(longer, shorter)) / parseFloat(longerLength) * 100);
    // // similarity((longerLength - editDistance(longer, shorter)) / parseFloat(longerLength) * 100);
    // similarity(userSim);
    // // setSimValue((longerLength - editDistance(longer, shorter)) / parseFloat(longerLength) * 100);
    // setSimValue(userSim);
    // console.log("CONSOLEeeeeeeeeeeeeeeeeeeeeee: ", userSim);
    // console.log("sIMVALUE" ,simValue);
  };

  const editDistance = (s1, s2) => {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    const costs = new Array();
    for (let i = 0; i <= s1.length; i++) {
      let lastValue = i;
      for (let j = 0; j <= s2.length; j++) {
        if (i === 0)
          costs[j] = j;
        else {
          if (j > 0) {
            let newValue = costs[j - 1];
            if (s1.charAt(i - 1) !== s2.charAt(j - 1))
              newValue = Math.min(Math.min(newValue, lastValue),
                costs[j]) + 1;
            costs[j - 1] = lastValue;
            lastValue = newValue;
          }
        }
      }
      if (i > 0)
        costs[s2.length] = lastValue;
    }
    return costs[s2.length];
  };

  return (
    <TouchableOpacity
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={1}
    >
      <Animated.View
        style={{
          width: 100,
          height: 100,
          justifyContent: "center",
          alignItems: "center",
          transform: [{ scale: scaleAnim }],
          backgroundColor: "#4c4637",
          shadowOffset: { width: 10, height: 2 },
          borderRadius: 50,
          elevation: 5,
          overflow: "hidden",
          zIndex: 2,
          opacity: 1,
        }}
      >
        <Image
          source={require("./assets/mic.png")}
          style={{
            width: 60,
            height: 80,
            zIndex: 1,
            opacity: 1,
          }}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

export default RecButton;

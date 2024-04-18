// import React, { useState } from "react";
// import { View, TouchableOpacity, Image, Animated } from "react-native";

// const PressableImageButton = () => {
//   const [scaleAnim] = useState(new Animated.Value(1));

//   const handlePressIn = () => {
//     Animated.spring(scaleAnim, {
//       toValue: 1.1,
//       useNativeDriver: true,
//     }).start();
//   };

//   const handlePressOut = () => {
//     Animated.spring(scaleAnim, {
//       toValue: 1,
//       useNativeDriver: true,
//     }).start();
//   };

//   return (
//     <TouchableOpacity
//       onPressIn={handlePressIn}
//       onPressOut={handlePressOut}
//       activeOpacity={1}
//     >
//       <Animated.View
//         style={{
//           width: 100,
//           height: 100,
//           justifyContent: "center",
//           alignItems: "center",
//           transform: [{ scale: scaleAnim }],
//           //   shadowColor: "red",
//           backgroundColor: "#4c4637",
//           shadowOffset: { width: 10, height: 2 },
//           //   shadowOpacity: 100,
//           //   shadowRadius: 100,
//           borderRadius: 50, // Make it round
//           //   borderColor: "red",
//           //   borderWidth: 1,
//           elevation: 5, // For Android
//           overflow: "hidden", // Clip the shadow
//           zIndex: 2, // Place it on top
//           opacity: 1,
//         }}
//       >
//         <Image
//           source={require("./assets/mic.png")}
//           style={{
//             width: 60, // Adjust the width and height according to your image
//             height: 80,
//             zIndex: 1,
//             opacity: 1,
//             // shadowColor: "red",
//             // shadowOpacity: 1,
//             // shadowRadius: 10,
//             // borderColor: "green",
//             // borderWidth: 1,
//           }}
//         />
//       </Animated.View>
//     </TouchableOpacity>
//   );
// };

// export default PressableImageButton;

// import React, { useState } from "react";
// import { View, TouchableOpacity, Image, Animated } from "react-native";
// import { Audio } from "expo-av";

// const PressableImageButton = () => {
//   const [scaleAnim] = useState(new Animated.Value(1));
//   const [recording, setRecording] = useState(null);

//   const handlePressIn = async () => {
//     Animated.spring(scaleAnim, {
//       toValue: 1.1,
//       useNativeDriver: true,
//     }).start();

//     // Start recording
//     try {
//       console.log("Requesting permissions..");
//       const { status } = await Audio.requestPermissionsAsync();
//       if (status !== "granted") return;

//       await Audio.setAudioModeAsync({
//         allowsRecordingIOS: true,
//         playsInSilentModeIOS: true,
//         // Remove the interruptionModeIOS setting to avoid the error.
//         // interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
//         shouldDuckAndroid: true,
//         // interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
//         playThroughEarpieceAndroid: false,
//       });

//       console.log("Starting recording..");
//       const { recording } = await Audio.Recording.createAsync(
//         Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
//       );
//       setRecording(recording);
//       console.log("Recording started");
//     } catch (err) {
//       console.error("Failed to start recording", err);
//     }
//   };

//   const handlePressOut = async () => {
//     Animated.spring(scaleAnim, {
//       toValue: 1,
//       useNativeDriver: true,
//     }).start();

//     // Stop recording
//     if (!recording) return;
//     console.log("Stopping recording..");
//     await recording.stopAndUnloadAsync();
//     const uri = recording.getURI();
//     console.log("Recording stopped and stored at", uri);
//     setRecording(null);
//     // Here you might want to handle the recording file further, e.g., by sending it to a server
//   };

//   return (
//     <TouchableOpacity
//       onPressIn={handlePressIn}
//       onPressOut={handlePressOut}
//       activeOpacity={1}
//     >
//       <Animated.View
//         style={{
//           width: 100,
//           height: 100,
//           justifyContent: "center",
//           alignItems: "center",
//           transform: [{ scale: scaleAnim }],
//           backgroundColor: "#4c4637",
//           shadowOffset: { width: 10, height: 2 },
//           borderRadius: 50,
//           elevation: 5,
//           overflow: "hidden",
//           zIndex: 2,
//           opacity: 1,
//         }}
//       >
//         <Image
//           source={require("./assets/mic.png")}
//           style={{
//             width: 60,
//             height: 80,
//             zIndex: 1,
//             opacity: 1,
//           }}
//         />
//       </Animated.View>
//     </TouchableOpacity>
//   );
// };

// export default PressableImageButton;

// import React, { useState, useRef } from "react";
// import { View, TouchableOpacity, Image, Animated, Alert } from "react-native";
// import { Audio } from "expo-av";

// const PressableImageButton = () => {
//   const [scaleAnim] = useState(new Animated.Value(1));
//   const [isRecording, setIsRecording] = useState(false);
//   const recording = useRef(null);

//   const handlePressIn = async () => {
//     Animated.spring(scaleAnim, {
//       toValue: 1.1,
//       useNativeDriver: true,
//     }).start();

//     // Start recording
//     try {
//       console.log("Requesting permissions..");
//       const { status } = await Audio.requestPermissionsAsync();
//       if (status !== "granted") return;

//       await Audio.setAudioModeAsync({
//         allowsRecordingIOS: true,
//         playsInSilentModeIOS: true,
//         shouldDuckAndroid: true,
//         playThroughEarpieceAndroid: false,
//       });

//       console.log("Starting recording..");
//       const recordingObject = new Audio.Recording();
//       await recordingObject.prepareToRecordAsync(
//         Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
//       );
//       await recordingObject.startAsync();
//       recording.current = recordingObject;
//       setIsRecording(true);
//       console.log("Recording started");
//     } catch (err) {
//       console.error("Failed to start recording", err);
//       Alert.alert("Failed to start recording");
//     }
//   };

//   const handlePressOut = async () => {
//     Animated.spring(scaleAnim, {
//       toValue: 1,
//       useNativeDriver: true,
//     }).start();

//     // Stop recording
//     if (!isRecording) return;
//     try {
//       console.log("Stopping recording..");
//       await recording.current.stopAndUnloadAsync();
//       setIsRecording(false);
//       const uri = recording.current.getURI();
//       console.log("Recording stopped and stored at", uri);
//       // Send the recording to the server for transcription
//       await sendRecordingToServer(uri);
//     } catch (err) {
//       console.error("Failed to stop recording", err);
//       Alert.alert("Failed to stop recording");
//     }
//   };

//   const sendRecordingToServer = async (uri) => {
//     // Implement logic to send the recording file to your Flask server
//     // For example, you can use fetch or axios to send a POST request
//     // try {
//     //   console.log(JSON.stringify({ uri }));
//     //   const response = await fetch(
//     //     "https://tilawah.ew.r.appspot.com/transcribe",
//     //     {
//     //       method: "POST",
//     //       body: JSON.stringify({ uri }),
//     //       headers: {
//     //         "Content-Type": "application/json",
//     //       },
//     //     }
//     //   );
//     //   const data = await response.json();
//     //   console.log("Transcription:", data.transcription);
//     //   // Display the transcription to the user
//     //   // For example, you can use setState to update a state variable and display it in your UI
//     // } catch (err) {
//     //   console.error("Failed to send recording to server", err);
//     //   Alert.alert("Failed to send recording to server");
//     // }
//     try {
//       const response = await fetch(
//         "https://tilawah.ew.r.appspot.com/transcribe",
//         {
//           method: "POST",
//           body: JSON.stringify({ uri }),
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       const responseBody = await response.text(); // Get the raw response body
//       console.log("Raw response:", responseBody); // Print the raw response
//       const data = JSON.parse(responseBody); // Attempt to parse the response as JSON
//       console.log("Transcription:", data.transcription);
//     } catch (err) {
//       console.error("Failed to send recording to server", err);
//       Alert.alert("Failed to send recording to server");
//     }
//   };

//   return (
//     <TouchableOpacity
//       onPressIn={handlePressIn}
//       onPressOut={handlePressOut}
//       activeOpacity={1}
//     >
//       <Animated.View
//         style={{
//           width: 100,
//           height: 100,
//           justifyContent: "center",
//           alignItems: "center",
//           transform: [{ scale: scaleAnim }],
//           backgroundColor: "#4c4637",
//           shadowOffset: { width: 10, height: 2 },
//           borderRadius: 50,
//           elevation: 5,
//           overflow: "hidden",
//           zIndex: 2,
//           opacity: 1,
//         }}
//       >
//         <Image
//           source={require("./assets/mic.png")}
//           style={{
//             width: 60,
//             height: 80,
//             zIndex: 1,
//             opacity: 1,
//           }}
//         />
//       </Animated.View>
//     </TouchableOpacity>
//   );
// };

// export default PressableImageButton;

import React, { useState, useRef } from "react";
import { View, TouchableOpacity, Image, Animated, Alert } from "react-native";
import { Audio } from "expo-av";
import * as FileSystem from "expo-file-system";

const PressableImageButton = () => {
  const [scaleAnim] = useState(new Animated.Value(1));
  const [isRecording, setIsRecording] = useState(false);
  // const [transcription, setTranscription] = useState("");
  const recording = useRef(null);

  const handlePressIn = async () => {
    Animated.spring(scaleAnim, {
      toValue: 1.1,
      useNativeDriver: true,
    }).start();

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

      const response = await fetch("http://10.47.89.109:8080/transcribe", {
        method: "POST",
        body: formData,
      });
      const responseBody = await response.json();
      console.log("Transcription:", responseBody.transcription);
      // setTranscription(responseBody.transcription);
    } catch (error) {
      console.error("Failed to send recording to server:", error);
      Alert.alert("Failed to send recording to server");
    }
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

export default PressableImageButton;

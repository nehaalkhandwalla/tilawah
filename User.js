import React from "react";
import { useState, useEffect } from "react";
import {
  Text,
  View,
  Pressable,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import styles from "./StyleUser.js";
import { supabase } from "./supabase";
import { auth } from "./supabase.js";

const User = () => {
  const [ayahReps, setAyahReps] = useState("");
  const [intermediateReps, setIntermediateReps] = useState("");
  const [surahReps, setSurahReps] = useState("");
  const [user, setUser] = useState(null);

  const handleUpdate = async () => {
    useEffect(() => {
      // Fetch the current user when the component mounts
      const fetchUser = async () => {
        const user = await auth.getUser();
        setUser(user.data.user);
      };
      fetchUser();
    }, []);

    // if (user) {
    //   const { data, error } = await supabase
    //     .from("recitation_settings")
    //     .update({
    //       ayah_reps: parseInt(ayahReps, 10),
    //       intermediate_reps: parseInt(intermediateReps, 10),
    //       complete_reps: parseInt(surahReps, 10),
    //     })
    //     .match({ id: user.id });

    //   if (error) {
    //     console.error(error);
    //   } else {
    //     console.log("Update successful", data);
    //   }
    // }
    const handleUpdate = async () => {
      if (user) {
        const { data, error } = await supabase
          .from("recitation_settings")
          .update({
            ayah_reps: parseInt(ayahReps, 10),
            intermediate_reps: parseInt(intermediateReps, 10),
            complete_reps: parseInt(surahReps, 10),
          })
          .match({ id: user.id });

        if (error) {
          console.error(error);
        } else {
          console.log("Update successful", data);
        }
      }
    };
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>User Settings</Text>
        </View>
        <View style={styles.details}>
          {/* <Pressable
          style={({ pressed }) => [
            styles.button,
            {
              backgroundColor: pressed ? "#332F24" : "#4C4637",
            },
          ]}
        >
          <Text style={styles.text}>Profile</Text>
        </Pressable> */}
          <Text style={styles.heading}>Profile</Text>
          <View style={styles.subDetails}>
            <Text style={styles.text}>Name: </Text>
            <Text style={styles.text}>Email: </Text>
            <Text style={styles.text}>Username: </Text>
          </View>
          {/* <Pressable
          style={({ pressed }) => [
            styles.button,
            {
              backgroundColor: pressed ? "#332F24" : "#4C4637",
            },
          ]}
        >
          <Text style={styles.text}>Settings</Text>
        </Pressable> */}
          <Text style={styles.heading}>Memorisation Settings</Text>
          <View style={styles.subDetails}>
            <TextInput
              style={styles.input}
              value={ayahReps}
              onChangeText={setAyahReps}
              keyboardType="numeric"
              placeholder="Ayah repetitions"
            />
            <TextInput
              style={styles.input}
              value={intermediateReps}
              onChangeText={setIntermediateReps}
              keyboardType="numeric"
              placeholder="Intermediate repetitions"
            />
            <TextInput
              style={styles.input}
              value={surahReps}
              onChangeText={setSurahReps}
              keyboardType="numeric"
              placeholder="Complete repetitions"
            />
            {/* <Text style={styles.text}>Ayah repetitions: </Text>
          <Text style={styles.text}>Intermediate repetitions: </Text>
          <Text style={styles.text}>Surah repetitions: </Text> */}
          </View>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              {
                backgroundColor: pressed ? "#332F24" : "#4C4637",
              },
            ]}
          >
            <Text style={styles.text}>Sign Out</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              {
                backgroundColor: pressed ? "#332F24" : "#4C4637",
              },
            ]}
            onPress={handleUpdate} // This will call the update function when the button is pressed
          >
            <Text style={styles.text}>Update Settings</Text>
          </Pressable>
          {/* <Text style={styles.heading}>Sign Out</Text> */}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default User;
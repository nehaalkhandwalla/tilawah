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

const User = ({session, navigation}) => {
  const [ayahReps, setAyahReps] = useState("");
  const [intermediateReps, setIntermediateReps] = useState("");
  const [surahReps, setSurahReps] = useState("");
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [Loading, setLoading] = useState(true);
  const [name, setName] = useState("");

  console.log("session3", session);
  useEffect(() => {
    getProfile();
  }, [session]);



  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullname, setFullName] = useState("");
  const [uniEmail, setUniEmail] = useState("");

  useEffect(() => {
    getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);

    if (!session?.user) {
      throw new Error("No user on the session!");
      }

      let { data, error, status } = await supabase
        .from("profiles")
        .select(`id, username, email`)
        .eq("id", session.user.id)
        .single();

      if (error && status !== 406) {
      throw error;
      }
      if (data) {
      setUserName(data.username);
      setEmail(data.email);
    }
    } catch (error) {
    console.error(error.message);
    } finally {
    setLoading(false);
    }
  }

  async function updateProfile() {
    try {
    setLoading(true);

    if (!session?.user) throw new Error("No user on the session!");

    let { error } = await supabase.from("profiles").upsert({
            id: session?.user.id,
            username: username,
    });

    if (error) {
            throw error;
    } else {
            setUserName(username);
            alert("Profile updated successfully");
    }
    } catch (error) {
    console.error(error.message);
    } finally {
    setLoading(false);
    }
  }
  
  async function updatePassword() {
    try {
    if (!session?.user) {
            throw new Error("No user on the session!");
    }

    if (password !== confirmPassword) {
            throw new Error("Passwords do not match!");
    }

    setLoading(true);

    const { error } = await supabase.auth.updateUser({
            password: password,
    });

    if (error) {
            throw error;
      } else {
              alert("Password updated successfully");
      }
    } catch (error) {
    console.error(error.message);
    } finally {
    setLoading(false);
    setPassword("");
      setConfirmPassword("");
    }
    }


  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Sign out error", error);
    } else {
      navigation.navigate("Landing");
    }
  };



  const handleUpdate = async () => {
    useEffect(() => {
      const fetchUser = async () => {
        const user = await auth.getUser();
        setUser(user.data.user);
      };
      fetchUser();
    }, []);

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
          <Text style={styles.title}>{session.user.user_metadata.username}'s Settings</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.heading}>Profile</Text>
          <View style={styles.subDetails}>
            <Text style={styles.text}>Email: {session.user.user_metadata.email}</Text>
            <Text style={styles.text}>Username: {session.user.user_metadata.username}</Text>
          </View>
        <Text style={styles.heading}>Memorisation Settings</Text>
          <View style={styles.subDetails}>
            <View style= {{flexDirection: 'row'}}>
            <Text style={styles.text}>Ayah repetitions: 3</Text>
            </View>
          </View>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              {
                backgroundColor: pressed ? "#332F24" : "#191712",
              },
            ]}
            onPress= {handleSignOut}
          >
            <Text style={styles.text}>Sign Out</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              {
                backgroundColor: pressed ? "#332F24" : "#191712",
              },
            ]}
            onPress={handleUpdate} // Call the update function when the button is pressed
          >
            <Text style={styles.text}>Update Settings</Text>
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default User;

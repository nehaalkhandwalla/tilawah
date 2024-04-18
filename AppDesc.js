import { StyleSheet, Text, View } from "react-native";

const AppDesc = () => {
  return (
    <Text style={styles.title}>
      Tilawah (Arabic: تِلَاوَة) Noun: The act of reciting or reading aloud from
      the Qur'an.
    </Text>
  );
};

export default AppDesc;

const styles = StyleSheet.create({
  title: {
    color: "#FFEBB8",
    fontSize: 25,
    top: -100,
    // position: "absolute",
    width: 400,
    textAlign: "center",
  },
  text: {
    color: "white",
  },
});

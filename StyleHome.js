import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#FFEBB8",
    fontSize: 30,
    top: -100,
    // position: "absolute",
    textAlign: "left",
  },
  text: {
    color: "#FFEBB8",
    fontSize: 25,
    // position: "absolute",
  },
  button: {
    backgroundColor: "#4C4637",
    margin: 12,
    width: 300,
    height: 80,

    // top: 100,
    // position: "absolute",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  settingIcon: {
    position: "absolute",
    right: 20,
    top: 20,
  },
});
export default styles;

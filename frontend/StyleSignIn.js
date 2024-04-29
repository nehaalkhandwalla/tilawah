import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    color: "#FFEBB8",
    fontSize: 25,
    top: 100,
    position: "absolute",
    textAlign: "center",
  },
  text: {
    color: "#4C4637",
    fontSize: 20,
    alignItems: "center",
  },
  signIn: {
    // left: 10,
    top: 10,
    color: "#FFEBB8",
    fontSize: 20,
    textAlign: "center",
  },
  smallerButton: {
    backgroundColor: "#FFEBB8",
    margin: 12,
    height: 40,
    top: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    top: 20,
    paddingLeft: 10,
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#FFEBB8",
    color: "#FFEBB8",
  },
  button: {
    backgroundColor: "#FFEBB8",
    width: "300",
    height: 200,
    bottom: -40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 700,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#4C4637",
    width: 300,
    height: 450,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FFEBB8",
  },
  message: {
    padding: 15,
    color: "white",
  },
});
export default styles;

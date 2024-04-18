import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#191712",
    alignItems: "center",
    justifyContent: "center",
  },
  details: {
    alignItems: "left",
    width: 300,
    height: "auto",
    justifyContent: "space-between",
    padding: 12,
  },
  title: {
    color: "#FFEBB8",
    fontSize: 25,
    top: -100,
    textAlign: "center",
    zIndex: 1,
  },
  heading: {
    fontSize: 20,
    color: "#FFEBB8",
    textTransform: "uppercase",
  },
  text: {
    color: "#FFEBB8",
    fontSize: 18,
    marginBottom: 5,
  },
  subDetails: {
    padding: 20,
    paddingBottom: 50,
    justifyContent: "space-between",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    margin: 12,
    backgroundColor: "#FFEBB8",
    padding: 10,
    borderRadius: 10,
  },
});
export default styles;

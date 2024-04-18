import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    color: "#FFEBB8",
    fontSize: 25,
    // top: -150,
    // position: "absolute",
    textAlign: "center",
    marginBottom: 50,
    padding: 10,
    position: "fixed",
  },
  arabictext: {
    // fontFamily: "Uthmani",
    color: "#FFEBB8",
    fontSize: 25,
    paddingTop: 40,
    // paddingBottom: 10,
    alignItems: "center",
  },
  scrolly: {
    height: 600,
    // top: -50,
  },
  nav: {
    color: "#FFEBB8",
    top: -130,
    backgroundColor: "#4C4637",
    width: 70,
    height: 30,
    overflow: "hidden",
    justifyContent: "center",
    // position: "absolute",
    // textAlign: "center",
    padding: 5,
    fontSize: 20,
    borderRadius: 10,
    paddingBottom: 10,
    marginBottom: 10,
    // borderColor: "#FFEBB8",
    borderWidth: 1,
  },
  button: {
    // backgroundColor: "white",
    borderRadius: 50,
    height: 120,
    width: 120,
    shadowRadius: 30,
    shadowOpacity: 1,
    // position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    opacity: 1,
    bottom: 20,
    shadowColor: "#FFEBB8",
    // shadowOffset: { width: 10, height: 2 },
    zIndex: 1,
  },
  verseWaudio: {
    borderColor: "#4C4637",
    // borderWidth: 1,
    // borderColor: "white",
    borderBottomWidth: 1,
    // paddingTop: 30,
    paddingBottom: 30,
  },
  ayah: {
    // color: "#FFEBB8",
    fontSize: 20,
    // paddingright: 100,
    // width: 400,
    // margintop: 100,
    // paddingtop: 100,
    // paddingbottom: 100,
    flexWrap: "wrap",
    // paddingright: 100,
    justifyContent: "right",
    // alignItems: "center",
    flexDirection: "row-reverse",
    // borderWidth: 1,
    // borderColor: "white",
    paddingtop: 10,
    // position: "absolute",

    // flexDirection: "row-reverse",
    // alignItems: "center",
  },
  specialSequenceContainer: {
    backgroundColor: "#FFEBB8",
    borderRadius: 10,
    padding: 5,
    marginBottom: 10,
  },
  specialSequence: {
    color: "#4C4637",
    fontSize: 20,
  },
  play: {
    backgroundColor: "red",
    borderColor: "black",
    borderWidth: 1,
    // position: "absolute",
  },
  bottom: {
    bottom: -300,
    // borderColor: "red",
    // borderWidth: 1,
    position: "absolute",
    paddingRight: 20,
    // paddingTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#FFEBB8",
  },
  container: {
    width: 400,
    top: -50,
    // padding: 8,
    // borderWidth: 1,
    // borderColor: "white",
    justifyContent: "right",
    // borderbottomwidth: 1,
    // paddingbottom: 10,
    // borderbottom:
    // marginLeft: 50,
    // paddingRight: 50,
    // flexDirection: "row",
    flexWrap: "wrap",
    height: 450,
    flexDirection: "row-reverse",
    // right: -20,
    // top: -100,

    // justifyContent: "center",
    // alignItems: "right",
    // padding: 10,
  },
});
export default styles;
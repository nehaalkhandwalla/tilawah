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
  // selectedAyah: {
  //   borderColor: '#FFEBB8',
  //   borderWidth: 1,
  //   // width: 300,
  // },
  scrolly: {
    height: 500,
    // top: -50,
  },
  boldText: {
    fontWeight: 'bold',
  },  
  nav: {
    color: "#FFEBB8",
    top: -130,
    backgroundColor: "#4C4637",
    width: 70,
    height: 30,
    overflow: "hidden",
    justifyContent: "center",
    padding: 5,
    fontSize: 20,
    borderRadius: 10,
    paddingBottom: 10,
    marginBottom: 10,
    borderWidth: 1,
  },
  verseWaudio: {
    borderColor: "#4C4637",
    borderBottomWidth: 1,
    paddingBottom: 30,
  },
  ayah: {
    fontSize: 20,
    flexWrap: "wrap",
    justifyContent: "right",
    flexDirection: "row-reverse",
    paddingtop: 10,
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
  },
  bottom: {
    height: 230,
    bottom: -300,
    // borderColor: 'red',
    // borderWidth: 1,
    position: "absolute",
    // paddingRight: 20,
    justifyContent: "space-between",
    alignItems: "center",
    width: 400,
  },
  transcriptions: {
    left: 10,
    position: "absolute",
    // borderColor: 'red',
    // borderWidth: 1,
    width: 230,
    height: 230,
    padding: 10,
    alignItems: 'center',
  },
  button: {
    borderRadius: 50,
    color: '#FFEBB8',
    // borderColor: 'red',
    // borderWidth: 1,
    height: 120,
    width: 120,
    shadowRadius: 30,
    shadowOpacity: 1,
    justifyContent: "center",
    alignItems: "center",
    opacity: 1,
    bottom: -100,
    shadowColor: "#FFEBB8",
    zIndex: 1,
    right: -130,
  },
  text: {
    color: "#FFEBB8",
    top: -10,
    fontWeight: 'bold',
  },
  arabictextTranscription: {
    // fontFamily: "Uthmani",
    color: "#FFEBB8",
    fontSize: 25,
    paddingTop: 5,
    // paddingBottom: 10,
    alignItems: "center",
  },
  scrollyTranscriptions: {
    width: 240,
    // height: 500,
    borderColor: '#FFEBB8',
    borderWidth: 1,
    borderRadius: 10,
    // alignItems: 'flex-start',
  },
  placeholder: {
    color: '#FFEBB8',
    opacity: 0.5,
    fontSize: 15,
    textAlign: 'center',
    paddingRight: 35,
    top: 100,
  },
  container: {
    width: 400,
    top: -50,
    justifyContent: "right",
    flexWrap: "wrap",
    height: 450,
    flexDirection: "row-reverse",
  },
});
export default styles;

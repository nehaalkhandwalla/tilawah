import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#191712", 
    alignItems: "center",
    justifyContent: "flex-start",  
    paddingTop: 30,  
  },
  details: {
    width: "90%",  
    backgroundColor: "#4C4637",  
    borderRadius: 10,  
    padding: 20,  
    marginTop: 20,  
    marginBottom: 20, 
  },
  title: {
    color: "#FFEBB8",
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20, 
  },
  heading: {
    fontSize: 18,
    color: "#FFEBB8",
    fontWeight: "600",
    marginTop: 15,  
    marginBottom: 5, 
  },
  text: {
    color: "#FFF",  // White for better readability
    fontSize: 16,
    lineHeight: 24,  
  },
  subDetails: {
    justifyContent: "space-between",
    marginVertical: 10,  
  },
  button: {
    backgroundColor: "#4C9AFF",  
    paddingVertical: 12,  
    paddingHorizontal: 20,  
    borderRadius: 20,  
    alignItems: "center",
    marginTop: 10,  
    color: '#4c4637',
    width: '100%',  
  },
  input: {
    color: "#FFEBB8",
    backgroundColor: "#334E68",  
    borderColor: "#FFEBB8",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    marginTop: 5, 
    marginBottom: 15,  
    width: '100%', 
  },
});

export default styles;

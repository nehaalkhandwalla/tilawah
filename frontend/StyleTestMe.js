import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    page:{
        justifyContent: 'center',
        padding: 10,
    },
    title: {
        color: "#FFEBB8",
        fontSize: 25,
        textAlign: "center",
        marginBottom: 50,
        padding: 10,
        position: "fixed",
      },
    ayah: {
        fontSize: 25,
    },
    scrolly: {

        flexDirection: 'row-reverse',
        flexWrap: 'wrap',

      },
    container: {
        borderColor: '#FFEBB8',
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
      },
    button: {
        borderRadius: 50,
        color: '#FFEBB8',
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
        right: -250,
      },
    });
    export default styles;
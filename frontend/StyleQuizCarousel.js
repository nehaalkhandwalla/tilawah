import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    cardContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    card: {
        width: 350,
        height: 500,
        // color: '#FFEBB8',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4C4637',
        borderRadius: 10,
        padding: 20, // Consistent padding
    },
    cardCorrect: {
        backgroundColor: 'green',
    },
    cardIncorrect: {
        backgroundColor: 'red',
    },
    question: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFEBB8',
        marginBottom: 10,
    },
    selectedAnswer: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'navy',
        marginTop: 10,
    },
    button: {
        marginVertical: 5,
        padding: 10,
        backgroundColor: '#FFEBB8',
        borderRadius: 5,
        width: '90%', // Consistent button width
    },
    buttonText: {
        color: '#4C4637',   
        textAlign: 'center',
        fontWeight: 'bold',
    },
    answer: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 20,
    },
    selectedButton: {
        backgroundColor: '#4CAF50', // A different color to indicate selection
    },
    selectedAnswer: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'navy',
        marginTop: 10,
    },
    correctAnswer: {
        backgroundColor: 'green',
        // color: 'white',
    },
    incorrectAnswer: {
        backgroundColor: 'red',
    },
    dot: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Gray dot for inactive
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 3
    },
    activeDot: {
        backgroundColor: '#FFEBB8', // Blue dot for active
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 3
    }
});
export default styles;
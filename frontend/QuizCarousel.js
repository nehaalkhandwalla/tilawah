import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import FlipCard from 'react-native-flip-card';
import styles from './StyleQuizCarousel';

const { width } = Dimensions.get('window');

const QuizCarousel = ({ questions, onAnswerSelected, navigation, route }) => {
    // const [numberAnswered,setNumberAnswered] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Manage which question is being displayed
    const [flipStatus, setFlipStatus] = useState(new Array(questions.length).fill(false));
    const [selectedAnswers, setSelectedAnswers] = useState(new Array(questions.length).fill(null));
    const [answersCorrectness, setAnswersCorrectness] = useState(new Array(questions.length).fill(null));

    // Function to handle flipping the card
    const toggleFlip = (index) => {
        // Only allow the flip if an answer has been selected
        if (selectedAnswers[index] !== null) {
            setFlipStatus(flipStatus.map((status, i) => i === index ? !status : status));
        }
    };

    // Function to handle answer selection
    const handleAnswerSelection = (index, selectedOption) => {
        console.log("SelECTED", selectedOption)
        const currentQuestion = questions[currentQuestionIndex];
        console.log('CorrectQ - ', currentQuestion, 'correctQ.ans - ', currentQuestion.answer)
        if (selectedAnswers[index] === null) { // Only process if no answer has been selected yet
            setSelectedAnswers(selectedAnswers.map((answer, i) => i === index ? selectedOption : answer));
            setAnswersCorrectness(answersCorrectness.map((correct, i) =>
                i === index ? (questions[i].answer === selectedOption) : correct));
            // Automatically flip the card upon selecting an answer
            setFlipStatus(flipStatus.map((status, i) => i === index ? true : status));
            // Call the passed-in function from parent to handle answer logic (score update)
            
            // Update the number of questions answered
            // setNumberAnswered(numberAnswered + 1);
            // if (numberAnswered === questions.length - 1) {
            //     // Handle end of quiz logic here
            //     navigation.navigate("FinalScore", { score: answersCorrectness.filter(Boolean).length });
            // }

            // Optionally, move to the next question after a delay
            setTimeout(() => {
                const nextIndex = (currentQuestionIndex + 1) % questions.length;
                setCurrentQuestionIndex(nextIndex);
                newFlipStatus = [...flipStatus];
                newFlipStatus[currentQuestionIndex] = false; // Reset flip status when moving to the next question
                setFlipStatus(newFlipStatus);
            }, 2000); // Adjust time delay as needed
        }
        return onAnswerSelected(selectedOption, currentQuestion.answer);
    };

    return (
        <Swiper
            style={styles.wrapper}
            showsButtons={false}
            showsPagination={true}
            dotStyle={styles.dot}
            activeDotStyle={styles.activeDot}
            loop={false}
            cardStyle={{ width: width * 0.8, height: 250 }}
        >
            {questions.map((question, index) => (
                <FlipCard
                    key={index}
                    flip={flipStatus[index]}
                    friction={6}
                    perspective={1000}
                    flipHorizontal={true}
                    flipVertical={false}
                    clickable={false}
                    style={styles.cardContainer}
                    onFlip={() => toggleFlip(index)}
                >
                    {/* Front of the card */}
                    <TouchableOpacity activeOpacity={1} style={styles.card} onPress={() => toggleFlip(index)}>
                        <Text style={styles.question}>{question.question}</Text>
                        {question.options.map((option, idx) => (
                            <TouchableOpacity
                                key={idx}
                                style={[
                                    styles.button,
                                    selectedAnswers[index] === option
                                        ? (answersCorrectness[index] ? styles.correctAnswer : styles.incorrectAnswer)
                                        : styles.button
                                ]}
                                onPress={() => handleAnswerSelection(index, option)}
                                disabled={selectedAnswers[index] !== null}
                            >
                                <Text style={styles.buttonText}>{option}</Text>
                            </TouchableOpacity>
                        ))}
                    </TouchableOpacity>
                    {/* Back of the card */}
                    <TouchableOpacity activeOpacity={1} style={[
                        styles.card,
                        answersCorrectness[index] ? styles.cardCorrect : styles.cardIncorrect
                    ]} onPress={() => toggleFlip(index)}>
                        <Text style={styles.answer}>
                            {answersCorrectness[index] ?
                                `Correct! The answer is ${question.answer}` :
                                `Incorrect, the correct answer is ${question.answer}`}
                        </Text>
                    </TouchableOpacity>
                </FlipCard>
            ))}
        </Swiper>
    );
};

export default QuizCarousel;


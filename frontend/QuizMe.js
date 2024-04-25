import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import axios from 'axios';
import QuizCarousel from './QuizCarousel'; // Assuming this is the correct path
import styles from './StyleQuizMe';

const QuizMe = () => {
    const [questions, setQuestions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [score, setScore] = useState(0); // To keep track of user score
    const totalQuestions = questions.length; // Total number of questions
    const [numberAnswered, setNumberAnswered] = useState(0);

    useEffect(() => {
        const fetchAyahs = async () => {
            try {
                const response = await axios.get('http://api.alquran.cloud/v1/surah/1');
                const ayahs = response.data.data.ayahs;
                const generatedQuestions = generateQuestions(ayahs);
                setQuestions(generatedQuestions);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching Ayahs:", error);
                setIsLoading(false);
            }
        };

        fetchAyahs();
    }, []);

    const handleAnswerSelection = (selectedOption, correctAnswer) => {
        console.log("Selected option:", selectedOption);  
        console.log("Correct answer:", correctAnswer);
        if (selectedOption === correctAnswer) {
            setScore(score + 1); // Increase score by 1 if the answer is correct
        }
        setNumberAnswered(numberAnswered + 1);
        console.log("Number of questions answered:", numberAnswered);
        console.log("Score:", score);
        // You can add logic here to move to the next question or handle end of quiz
        //navigate to FinalScore screen when number of questions answered equals total questions
        if (numberAnswered === totalQuestions -1) {
            navigation.navigate("FinalScore", { score: score });
        }
    };

    const generateQuestions = (ayahs) => {
        let questions = [];
        ayahs.forEach((ayah, index) => {
            const nextAyah = ayahs[index + 1];
            const prevAyah = ayahs[index - 1];
            if (nextAyah) {
                questions.push({
                    question: `What comes after: "${ayah.text}"?`,
                    options: shuffle([nextAyah.text, ...getRandomAyahs(ayahs, index)]),
                    answer: nextAyah.text
                });
            }
            if (prevAyah) {
                questions.push({
                    question: `What comes before: "${ayah.text}"?`,
                    options: shuffle([prevAyah.text, ...getRandomAyahs(ayahs, index)]),
                    answer: prevAyah.text
                });
            }
        });
        return questions.slice(0, 10); // limiting to 5 questions for brevity
    };

    const getRandomAyahs = (ayahs, currentIndex, count = 3) => {
        return ayahs
            .filter((_, idx) => idx !== currentIndex && idx !== currentIndex + 1 && idx !== currentIndex - 1)
            .sort(() => 0.5 - Math.random())
            .slice(0, count)
            .map(ayah => ayah.text);
    };

    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // swap elements
        }
        return array;
    };

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>Loading Questions...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
             <QuizCarousel questions={questions} onAnswerSelected={handleAnswerSelection} />
            <Text style={styles.scoreText}>Score: {score} / {totalQuestions}</Text>
        </View>
    );
};

export default QuizMe;


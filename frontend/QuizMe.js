import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import axios from 'axios';
import QuizCarousel from './QuizCarousel';
import styles from './StyleQuizMe';

const QuizMe = ({navigation}) => {
    const [questions, setQuestions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [score, setScore] = useState(0); // To keep track of user score
    const totalQuestions = questions.length; // Total number of questions
    const [numberAnswered, setNumberAnswered] = useState(0);
    const [selectedOption1, setSelectedOption1] = useState(''); 
    const [correctAnswer1, setCorrectAnswer1] = useState(''); 


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

    useEffect(()=>{
        if (totalQuestions!=0){
            if (numberAnswered === totalQuestions) {
                navigation.navigate("FinalScore", { score: score });
            }
        }
    },[score, numberAnswered])

    const handleAnswerSelection = (selectedOption, correctAnswer) => {
        if (selectedOption === correctAnswer) {
            setScore(score + 1); // Increase score by 1 if the answer is correct
        }
        setNumberAnswered(numberAnswered + 1);
        setSelectedOption1(selectedOption)
        setCorrectAnswer1(correctAnswer)

    };

    const generateQuestions = (ayahs) => {
        let questions = [];
        ayahs.forEach((ayah, index) => {
            const nextAyah = ayahs[index + 1];
            const prevAyah = ayahs[index - 1];
            if (nextAyah) {
                questions.push({
                    question: `What comes after: \n\n "${ayah.text}"?`,
                    options: shuffle([nextAyah.text, ...getRandomAyahs(ayahs, index)]),
                    answer: nextAyah.text
                });
            }
            if (prevAyah) {
                questions.push({
                    question: `What comes before: \n\n "${ayah.text}"?`,
                    options: shuffle([prevAyah.text, ...getRandomAyahs(ayahs, index)]),
                    answer: prevAyah.text
                });
            }
        });
        return questions.slice(0, 10); // number of questions to generate
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


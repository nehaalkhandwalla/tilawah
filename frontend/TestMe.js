import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Pressable, ScrollView } from 'react-native';
import styles from './StyleTestMe.js';
import RecButton from './RecButton';
import axios from 'axios';

const TestMe = ({ navigation, route  }) => {
    const [buttonShadowColor, setButtonShadowColor] = useState("#FFEBB8");
    const [selectedAyah, setSelectedAyah] = useState(null);
    const [similarity, setSimilarity] = useState(0);
    const [transcriptions, setTranscriptions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [ayahColour, setAyahColour] = useState("#FFEBB8");
    const [ayahs, setAyahs] = useState([]);
    const [surahName, setSurahName] = useState(null);
    const [ayahStatus, setAyahStatus] = useState([]);  // Track the status of each ayah
    const [selectedAyahIndex, setSelectedAyahIndex] = useState(0);
    const [newStatus, setNewStatus] = useState([]);
    const {surahNumber} = route.params;


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(
              `http://api.alquran.cloud/v1/surah/${surahNumber}`
            );
            setSurahName(response.data.data.name);
            // setSurahName;
            setAyahs(response.data.data.ayahs);
            setAyahStatus(new Array(response.data.data.ayahs.length).fill('default')); // Initialize all to default
            // setSelectedAyahIndex(1); // Automatically select the first ayah on load
            setSelectedAyah(response.data.data.ayahs[0]);
            setIsLoading(false);
          } catch (error) {
            console.error("Error fetching data:", error);
            setIsLoading(false);
          }
        };
    
        fetchData();
      }, []);

    const handlePressIn = () => {
        setButtonShadowColor("red");
    }

    const handlePressOut = () => {
        setButtonShadowColor("#FFEBB8");
    }

    const handleSimilarity = (similarity) => {

    };



    const handleTranscriptionReceived = (transcriptionData) => {
      let newStatus = [...ayahStatus];
      if (transcriptionData[1] > 70) {
          newStatus[selectedAyahIndex] = 'green';
          console.log("Ayah Status:", newStatus);
          setSelectedAyahIndex(prevIndex => {
              const nextIndex = prevIndex + 1 < ayahs.length ? prevIndex + 1 : prevIndex;
              setSelectedAyah(ayahs[nextIndex]);  // Move to next ayah
              return nextIndex;
          });
      } else {
          newStatus[selectedAyahIndex] = 'default';
      }
      setAyahStatus(newStatus);
  }
  
    const handleSelectedAyah = (ayah) => {
        setSelectedAyah(ayah);
    }

    console.log("Selected Ayah:", selectedAyah);
    return(
        <View style={styles.page}>
            <Text style={styles.title}>{surahName}</Text>
            <ScrollView style={styles.container} contentContainerStyle={{ alignItems: 'flex-end' }}>
            {ayahs.map((ayah, index) => (
                <Pressable key={index} style={styles.scrolly}>
                    {ayah.text.split(" ").map((word, wordIndex) => (
                        <Text key={wordIndex} style={[styles.ayah, { color: ayahStatus[index] === 'green' ? '#FFEBB8' : '#191712' }]}>
                          {word}
                        </Text>
                    ))}
                    <Text style={[styles.ayah, { color: ayahStatus[index] === 'green' ? '#FFEBB8' : '#FFEBB8' }]}>
                        {"\u06dd"}
                    </Text>
                </Pressable>
            ))}

            </ScrollView>
            <Pressable style={[styles.button, { shadowColor: buttonShadowColor }]}>
                <RecButton 
                selectedAyah={selectedAyah}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut} 
                similarity={handleSimilarity}
                onTranscriptionReceived={handleTranscriptionReceived}
            />
          </Pressable>
        </View>
    );
};
export default TestMe;
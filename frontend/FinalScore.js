// FinalScoreScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';

const FinalScoreScreen = ({ route, navigation }) => {

    const { score } = route.params;
    
    return (
        <View style={styles.container}>
            <Text style={styles.scoreText}>Your final score is: {score}</Text>
            <Button title="Restart Quiz" onPress={() => navigation.navigate("Home")} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scoreText: {
        fontSize: 24,
        margin: 20,
    }
});

export default FinalScoreScreen;

import {react} from 'react';
import { Text, View, Pressable } from "react-native";
import { useState } from "react";

const FinishMemorise = ({ navigation }) => {
    return (
        <View>
        <Text>Finish Memorise</Text>
        <Pressable
            onPress={() => {
            navigation.navigate("Home");
            }}
        >
            <Text>Go to Home</Text>
        </Pressable>
        </View>
    );
    };
    export default FinishMemorise;
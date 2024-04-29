import React from 'react';
import { Text } from 'react-native';
import styles from "./StyleMemorise.js";

const TranscriptionItem = ({ item }) => {
    console.log("ITEM SIMILARITY:", item.similarity)
  const textColor = item.similarity !== undefined && item.similarity > 60 ? 'green' : 'orange';

  return (
    <Text style={[styles.arabictextTranscription, { color: textColor }]}>
      {item.transcription}
      {item.similarity}
    </Text>
  );
};

export default TranscriptionItem;

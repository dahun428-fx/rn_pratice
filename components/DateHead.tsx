import {View, Text, StyleSheet, StatusBar} from 'react-native';
import React from 'react';

export default function DateHead() {
  const getKoreanDate = (date: Date = new Date()): string => {
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      <StatusBar backgroundColor={styles.block.backgroundColor} />
      <View style={styles.block}>
        <Text style={styles.dateText}>{getKoreanDate()}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  block: {
    padding: 16,
    backgroundColor: '#26a69a',
  },
  dateText: {
    fontSize: 24,
    color: 'white',
  },
});

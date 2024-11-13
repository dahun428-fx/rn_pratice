import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function Empty() {
  const text = '야호! 할일이 없습니다.';

  return (
    <View style={styles.block}>
      <Text style={styles.description}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: 24,
    color: '#9e9e9e',
  },
});

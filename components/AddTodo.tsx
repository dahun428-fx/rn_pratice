import {View, StyleSheet} from 'react-native';
import React from 'react';

export default function AddTodo() {
  return <View style={styles.block} />;
}

const styles = StyleSheet.create({
  block: {
    height: 64,
    backgroundColor: 'red',
  },
});

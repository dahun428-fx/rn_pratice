import React from 'react';
import DateHead from './components/DateHead';
import Empty from './components/Empty';
import AddTodo from './components/AddTodo';
import {SafeAreaView, StyleSheet} from 'react-native';
// import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={styles.block}>
      <DateHead />
      <Empty />
      <AddTodo />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

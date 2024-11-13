import React from 'react';
import {SafeAreaView} from 'react-native';
import DateHead from './components/DateHead';
import Empty from './components/Empty';
import AddTodo from './components/AddTodo';

export default function App() {
  return (
    <SafeAreaView>
      <DateHead />
      <Empty />
      <AddTodo />
    </SafeAreaView>
  );
}

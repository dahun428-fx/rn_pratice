import React, {useEffect, useState} from 'react';
import DateHead from './components/DateHead';
import Empty from './components/Empty';
import AddTodo from './components/AddTodo';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import TodoList from './components/TodoList';
import {onRead} from './components/data/onRead';
import {Todo} from './components/types/types';
import {initializeStorage} from './components/data/onInsert';

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const initializeApp = async () => {
      await initializeStorage(); // AsyncStorage 초기화
      const datas = await onRead(); // 데이터 확인
      console.log('Loaded todos:', datas);
      setTodos(datas);
    };

    initializeApp();
  }, []);

  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView
        behavior={Platform.select({
          ios: 'padding',
          android: undefined,
        })}
        style={styles.avoid}>
        <DateHead />
        {todos ? <TodoList todos={todos} /> : <Empty />}
        <AddTodo />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  avoid: {
    flex: 1,
  },
});

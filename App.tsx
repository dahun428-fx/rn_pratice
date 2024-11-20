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
import {onReadRealTime} from './components/data/onRead';
import {Todo} from './components/types/types';
import {onInsert} from './components/data/onInsert';
import {onToggle} from './components/data/onUpdate';

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    // Firestore 실시간 리스너 시작
    const unsubscribe = onReadRealTime(updatedTodos => {
      setTodos(updatedTodos); // 업데이트된 데이터를 상태에 저장
    });

    // 컴포넌트 언마운트 시 리스너 해제
    return () => {
      unsubscribe();
    };
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
        {todos ? <TodoList todos={todos} onToggle={onToggle} /> : <Empty />}
        <AddTodo onInsert={onInsert} />
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

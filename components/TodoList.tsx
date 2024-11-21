import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {Todo} from './types/types';
import TodoItem from './TodoItem';

type Props = {
  todos: Todo[];
  onToggle?: (id: string) => void;
  onDelete?: (id: string) => void;
};
const Seperator = () => {
  return <View style={styles.seperator} />;
};
export default function TodoList({todos, onToggle, onDelete}: Props) {
  return (
    <FlatList
      style={styles.list}
      data={todos}
      renderItem={({item}) => (
        <TodoItem todo={item} onDelete={onDelete} onToggle={onToggle} />
      )}
      keyExtractor={item => item.id?.toString() ?? ''}
      ItemSeparatorComponent={Seperator}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  seperator: {
    backgroundColor: '#e0e0e0',
    height: 1,
  },
});

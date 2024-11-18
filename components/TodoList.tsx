import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {Todo} from './types/types';
import TodoItem from './TodoItem';

type Props = {
  todos: Todo[];
};
const Seperator = () => {
  return <View style={styles.seperator} />;
};
export default function TodoList({todos}: Props) {
  return (
    <FlatList
      style={styles.list}
      data={todos}
      renderItem={({item}) => <TodoItem {...item} />}
      keyExtractor={item => item.id.toString()}
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

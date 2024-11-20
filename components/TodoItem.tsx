import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Todo} from './types/types';
type Props = {
  todo: Todo;
  onToggle?: (id: string) => void;
};
export default function TodoItem({todo, onToggle}: Props) {
  const {done, text, id} = todo;
  const doneIcon = require('./assets/icons/check_white/check_white.png');
  return (
    <View style={styles.item}>
      <TouchableOpacity
        onPress={() => {
          if (!id) {
            return;
          }
          onToggle?.(String(id));
        }}>
        <View style={[styles.circle, done && styles.filled]}>
          {done && <Image source={doneIcon} />}
        </View>
      </TouchableOpacity>
      <Text style={[styles.item, done && styles.lineThrough]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderColor: '#26a69a',
    borderWidth: 1,
    marginRight: 16,
  },
  filled: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#26a69a',
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: '#212121',
  },
  lineThrough: {
    color: '#9e9e9e',
    textDecorationLine: 'line-through',
  },
});

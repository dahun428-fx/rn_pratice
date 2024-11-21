import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Todo} from './types/types';
import Icon from 'react-native-vector-icons/MaterialIcons';

type Props = {
  todo: Todo;
  onToggle?: (id: string) => void;
  onDelete?: (id: string) => void;
};
export default function TodoItem({todo, onToggle, onDelete}: Props) {
  const {done, text, id} = todo;
  const doneIcon = require('./assets/icons/check_white/check_white.png');

  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => onToggle?.(String(id))}>
        <View style={[styles.circle, done && styles.filled]}>
          {done && <Image source={doneIcon} />}
        </View>
      </TouchableOpacity>
      <Text style={[styles.item, done && styles.lineThrough]}>{text}</Text>
      {done ? (
        <TouchableOpacity
          style={styles.iconWrapper}
          onPress={() => onDelete?.(String(id))}>
          <Icon name="delete" size={32} color={'red'} />
        </TouchableOpacity>
      ) : (
        <View style={styles.removePlaceholder} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    borderBottomColor: '#e0e0e0',
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
  removePlaceholder: {
    width: 32,
    height: 32,
  },
  iconWrapper: {
    marginLeft: 'auto',
  },
});

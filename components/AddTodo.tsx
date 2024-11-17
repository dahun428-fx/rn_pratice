import {
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from 'react-native';
import React, {useState} from 'react';

const buttonSource = require('./assets/icons/add_white/add_white.png');

const TodoButton = () => {
  return (
    <View style={styles.buttonStyle}>
      <Image source={buttonSource} />
    </View>
  );
};

export default function AddTodo() {
  const [text, setText] = useState('');

  const placeholderText = '할일을 입력하세요.';

  return (
    <View style={styles.block}>
      <TextInput
        placeholder={placeholderText}
        style={styles.input}
        value={text}
        onChangeText={setText}
      />

      {Platform.OS === 'ios' ? (
        <TouchableNativeFeedback>
          <TodoButton />
        </TouchableNativeFeedback>
      ) : (
        <TouchableOpacity activeOpacity={0.5}>
          <TodoButton />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    backgroundColor: 'white',
    height: 64,
    paddingHorizontal: 16,
    borderColor: '#bdbdbd',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    backgroundColor: '#26a69a',
    borderRadius: 24,
  },
});

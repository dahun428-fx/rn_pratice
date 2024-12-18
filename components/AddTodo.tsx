import {
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  Keyboard,
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

type Props = {
  onInsert: (text: string) => Promise<void>;
};

export default function AddTodo({onInsert}: Props) {
  const [text, setText] = useState('');

  const onPress = async () => {
    if (text.trim() !== '') {
      await onInsert(text);
      setText('');
      Keyboard.dismiss();
    }
  };

  const placeholderText = '할일을 입력하세요.';

  return (
    <View style={styles.block}>
      <TextInput
        placeholder={placeholderText}
        style={styles.input}
        value={text}
        onChangeText={setText}
        onSubmitEditing={onPress}
        returnKeyType="done"
        submitBehavior="blurAndSubmit" // 엔터 키 동작 정의
      />
      {Platform.select({
        ios: (
          <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
            <TodoButton />
          </TouchableOpacity>
        ),
        android: (
          <TouchableNativeFeedback onPress={onPress}>
            <View style={styles.circleWrapper}>
              <TodoButton />
            </View>
          </TouchableNativeFeedback>
        ),
      })}
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
  circleWrapper: {
    overflow: 'hidden',
    borderRadius: 24,
  },
});

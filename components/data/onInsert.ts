import {Todo} from '../types/types';
import firestore from '@react-native-firebase/firestore';

const getTodosIndex = async () => {
  const todosRef = firestore().collection('todos');
  const snapshot = await todosRef.get();
  const newIndex = snapshot.size + 1;
  return newIndex;
};

/**
 * 새로운 Todo 항목을 추가하고 dummyData.json에 반영
 * @param text 새로 추가할 Todo의 텍스트
 * @returns 업데이트된 Todo 배열
 */
export const onInsert = async (text: string): Promise<void> => {
  const index = await getTodosIndex();
  try {
    const todosRef = firestore().collection('todos');
    const newTodo: Todo = {
      index: index,
      text: text,
      done: false,
    };
    console.log('added => ', newTodo);
    await todosRef.add(newTodo);
  } catch (error) {
    console.log(error);
  }
};

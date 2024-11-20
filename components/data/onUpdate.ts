import {Todo} from '../types/types';
import firestore from '@react-native-firebase/firestore';

export const onToggle = async (id: string) => {
  try {
    const todoRef = firestore().collection('todos').doc(id);
    const doc = await todoRef.get();
    if (doc.exists) {
      const todo = doc.data() as Todo;
      await onUpdate(id, {done: !todo.done});
    }
  } catch (error) {
    console.log('error', error);
  }
  return true;
};

export const onUpdate = async (
  id: string,
  todo: Partial<Todo>,
): Promise<void> => {
  try {
    const todosRef = firestore().collection('todos').doc(id);

    await todosRef.update({
      done: todo.done, // 필드를 true 또는 false로 업데이트
    });

    console.log(`Todo ${id} updated: done = ${todo.done}`);
  } catch (error) {
    console.error('Error updating todo:', error);
  }
};

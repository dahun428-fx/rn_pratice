import {Todo} from '../types/types';
import firestore from '@react-native-firebase/firestore';

export const onRead = async (): Promise<Todo[]> => {
  try {
    const todosSnapshot = await firestore()
      .collection('todos')
      .orderBy('index', 'asc')
      .get();
    const todos: Todo[] = todosSnapshot.docs.map(doc => {
      return {
        id: doc.id,
        index: doc.data()?.index ?? 0,
        done: doc.data()?.done ?? false,
        text: doc.data()?.text ?? '',
      };
    });
    return todos;
  } catch (error) {
    console.error('Error fetching todos:', error);
    return [];
  }
};

export const onReadRealTime = (
  onUpdate: (todos: Todo[]) => void,
): (() => void) => {
  // Firestore의 실시간 리스너 설정
  const unsubscribe = firestore()
    .collection('todos')
    .orderBy('index', 'asc') // 인덱스 기준 정렬
    .onSnapshot(
      snapshot => {
        const todos: Todo[] = snapshot.docs.map(doc => ({
          id: doc.id,
          index: doc.data()?.index ?? 0,
          done: doc.data()?.done ?? false,
          text: doc.data()?.text ?? '',
        }));

        // 데이터 업데이트 시 콜백 호출
        onUpdate(todos);
      },
      error => {
        console.error('Error listening for todos updates:', error);
      },
    );

  // 리스너 해제 함수 반환
  return unsubscribe;
};

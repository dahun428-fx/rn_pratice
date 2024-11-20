import firestore from '@react-native-firebase/firestore';

export const onDelete = async (todoId: string) => {
  try {
    const todosRef = firestore().collection('todos').doc(todoId);

    // 문서 삭제
    await todosRef.delete();

    console.log(`Todo with ID ${todoId} has been deleted`);
  } catch (error) {
    console.error('Error deleting todo:', error);
  }
};

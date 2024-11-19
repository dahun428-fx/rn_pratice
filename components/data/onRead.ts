import {Todo} from '../types/types';
import database from '@react-native-firebase/database';

export const onRead = async (): Promise<Todo[]> => {
  try {
    const data = (await database().ref('/todos').once('value')).val();

    if (!data) {
      throw new Error('No data found');
    }
    // Firebase 데이터는 객체 형태로 반환되므로 배열로 변환
    return Object.values(data) as Todo[];
  } catch (error) {
    console.error('Error fetching todos:', error);
    return [];
  }
};

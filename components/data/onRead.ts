import {Todo} from '../types/types';
import {readTodosFromFile} from './onInsert';

export const onRead = async (): Promise<Todo[]> => {
  try {
    const data = await readTodosFromFile(); // JSON 파일 경로
    if (!data) {
      throw new Error('Failed to fetch data');
    }
    return data;
  } catch (error) {
    console.error('Error fetching todos:', error);
    return [];
  }
};

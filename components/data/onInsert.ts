import AsyncStorage from '@react-native-async-storage/async-storage';
import {Todo} from '../types/types';
import dummyData from './dummyData.json';

const STORAGE_KEY = 'dummy_data';

/**
 * AsyncStorage에 초기 데이터를 설정합니다.
 */
export const initializeStorage = async () => {
  try {
    const existingData = await AsyncStorage.getItem(STORAGE_KEY);
    if (!existingData) {
      // 기존 데이터가 없으면 초기화 진행
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(dummyData));
      console.log('Storage initialized with dummyData.');
    } else {
      console.log('Storage already initialized.');
    }
  } catch (error) {
    console.error('Failed to initialize storage:', error);
  }
};

/**
 * dummyData.json 파일에서 Todo 배열을 읽어옴
 * @returns Todo[]
 */
export const readTodosFromFile = async (): Promise<Todo[]> => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Failed to read file:', error);
    return [];
  }
};

/**
 * dummyData.json 파일에 Todo 배열을 저장
 * @param todos Todo[]
 */
const writeTodosToFile = async (todos: Todo[]) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  } catch (error) {
    console.error('Failed to write file:', error);
  }
};

/**
 * 새로운 Todo 항목을 추가하고 dummyData.json에 반영
 * @param text 새로 추가할 Todo의 텍스트
 * @returns 업데이트된 Todo 배열
 */
export const onInsert = async (text: string): Promise<Todo[]> => {
  const todos = await readTodosFromFile(); // 기존 데이터를 읽어옴

  const newTodo: Todo = {
    id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1, // 고유 ID 생성
    text,
    done: false,
  };

  const updatedTodos = [...todos, newTodo];
  writeTodosToFile(updatedTodos); // 업데이트된 데이터를 파일에 저장

  return updatedTodos;
};

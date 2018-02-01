import * as types from './actionType';
import { API_BASE_URL } from './../config';

export const setMessages = (message) => ({
  type: types.SET_MESSAGES,
  message,
});

export const setUserMessage = (message) => ({
  type: types.SET_USER_MESSAGES,
  message,
});

export const clearhistory = () => ({
  type: types.CLEAR_HISTORY,
});

export const setStudent = (student) => ({
  type: types.SET_STUDENT,
  student,
})
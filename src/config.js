export const API_BASE_URL =
process.env.REACT_APP_API_BASE_URL ||
'http://localhost:8080/api';
// 'http://mood-cloud.herokuapp.com/api';

export const SOCKET_URL =
process.env.REACT_APP_API_BASE_URL ||
'http://localhost:8080';
// 'http://mood-cloud.herokuapp.com';

// const API_BASE_URL = process.env.NODE_ENV === 'production' ? 
  // process.env.REACT_APP_API_BASE_URL : 'http://localhost:8080';
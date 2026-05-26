import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com/public',
  headers: { ACCESS_TOKEN: '******' },
  params: { testParam: 'TOKEN' },
});

export const getBooks = async () => {
  const res = await axiosInstance.get('/books');
  return res.data;
};

export const createBook = async bookData => {
  const res = await axiosInstance.post('/books', bookData);
  return res.data;
};

export const updateBook = async (id, body) => {
  const res = await axiosInstance.patch(`/books/${id}`, body);
  return res.data;
};

export const resetBook = async (id, body) => {
  const res = await axiosInstance.put(`/books/${id}`, body);
  return res.data;
};

export const deleteBook = async id => {
  const res = await axiosInstance.delete(`/books/${id}`);
  return res.data;
};

//!=========================================

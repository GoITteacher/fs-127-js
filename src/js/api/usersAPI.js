import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com/public',
});

export const getUsers = async () => {
  const res = await axiosInstance.get('/students');
  return res.data;
};

export const getUserById = async id => {
  const res = await axiosInstance.get(`/students/${id}`);
  return res.data;
};

export const createUser = async body => {
  const res = await axiosInstance.post('/students', body);
  return res.data;
};

export const updateUser = async (id, body) => {
  const res = await axiosInstance.patch(`/students/${id}`, body);
  return res.data;
};

export const resetUser = async (id, body) => {
  const res = await axiosInstance.put(`/students/${id}`, body);
  return res.data;
};

export const deleteUser = async id => {
  const res = await axiosInstance.delete(`/students/${id}`);
  return res.data;
};

import axios from 'axios';

const baseURL = "http://localhost:5001/todo";

export const getDataList = () => axios.get(`${baseURL}/list`);
export const createData = (payload) => axios.post(`${baseURL}/list`, payload);
export const deleteData = (id) => axios.delete(`${baseURL}/list/${id}`);


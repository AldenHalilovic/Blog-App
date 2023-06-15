import { useQuery } from 'react-query';
// import { apiClient } from './apiClient';
import axios from 'axios';

const QUERY_KEY = ['User'];

const fetchUser = async (params) => {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${params?.id}`);
  return data;
};

export const useGetUser = (params) => {
  return useQuery(QUERY_KEY, () => fetchUser(params));
};
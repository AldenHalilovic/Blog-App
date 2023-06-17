import { useQuery } from "react-query";
import axios from "axios";

const fetchPost = async (params) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${params?.id}`
  );
  return data;
};

export const useGetPost = (params) => {
  return useQuery(["Post", params?.id], () => fetchPost(params));
};
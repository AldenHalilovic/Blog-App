import { useQuery } from "react-query";
import axios from "axios";

export const useGetUser = (userId) => {
  return useQuery(["User", userId], async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    return data;
  });
};
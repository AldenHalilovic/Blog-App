import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

const deletePost = async (postId) => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  } catch (error) {
    throw new Error("Failed to delete the post.");
  }
};

const editPost = async (postId, updatedPost) => {
  try {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
      updatedPost
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to update the post.");
  }
};

export function useMutationPost() {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation(deletePost, {
    onSuccess: () => {
      queryClient.invalidateQueries("Posts");
    },
  });

  const editMutation = useMutation(editPost, {
    onSuccess: () => {
      queryClient.invalidateQueries(["Post", pageId]);
    },
  });



  return { deleteMutation, editMutation };
}

import { useGetPost } from "../Hooks/UsePosts";
import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { Box, Button, TextField } from "@mui/material";

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

const PostComponent = ({ pageId }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedPost, setEditedPost] = useState({});
  const {
    data: post,
    isLoading: isPostLoading,
    isError: isPostError,
  } = useGetPost({ id: pageId });
  console.log(post);

  const deleteMutation = useMutation(deletePost, {
    onSuccess: () => {
      const queryClient = useQueryClient();
      queryClient.invalidateQueries("Posts");
    },
  });

  const editMutation = useMutation(editPost, {
    onSuccess: () => {
      const queryClient = useQueryClient();
      queryClient.invalidateQueries(["Post", pageId]);
    },
  });
  const handleDelete = () => {
    deleteMutation.mutate(post.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditedPost(post);
  };

  const handleSave = () => {
    editMutation.mutate(post.id, editedPost);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  if (isPostLoading) {
    return <Box>Loading...</Box>;
  }

  if (isPostError) {
    return <Box>Error fetching post</Box>;
  }

  return (
    <Box>
      {post ? (
        <Box>
          {isEditing ? (
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="flex-end"
              gap={2}
              padding={2}
            >
              <TextField autoFocus label="Title" sx={{ mb: 2 }} />
              <textarea
                placeholder="Text"
                value={editedPost.body}
                rows={5}
                cols={90}
                onChange={(e) =>
                  setEditedPost({ ...editedPost, body: e.target.value })
                }
              ></textarea>
              <Box display="flex" justifyContent="flex-end" gap={2}>
                <Button variant="contained" onClick={handleSave}>
                  Save
                </Button>
                <Button variant="contained" onClick={handleCancel}>
                  Cancel
                </Button>
              </Box>
            </Box>
          ) : (
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="flex-end"
              gap={2}
              padding={1}
            >
              <Box>
                <h2>Title: {post.title}</h2>
                <h5>{post.body}</h5>
              </Box>
              <Box display="flex" gap={2}>
                <Button variant="contained" onClick={handleEdit}>
                  Edit
                </Button>
                <Button variant="contained" onClick={handleDelete}>
                  Delete
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      ) : (
        <Box>No post available</Box>
      )}
    </Box>
  );
};

export default PostComponent;

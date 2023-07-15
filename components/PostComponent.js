import React, { useState } from "react";
import { useGetPost } from "../Hooks/UsePosts";
import { useMutationPost } from "../Hooks/useMutationPost";
import { Box, Button, TextField } from "@mui/material";
import { useTranslations } from "next-intl";

const PostComponent = ({ pageId }) => {
  const t = useTranslations("PostsCo");

  const {
    data: post,
    isLoading: isPostLoading,
    isError: isPostError,
  } = useGetPost({ id: pageId });

  const { deleteMutation, editMutation } = useMutationPost(pageId);

  const [editedPost, setEditedPost] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    editMutation.reset();
    setEditedPost(post);
    setIsEditing(true);
  };

  const handleSave = () => {
    editMutation.mutate(post.id, editedPost);
    setIsEditing(false);
  };

  const handleCancel = () => {
    editMutation.reset();
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      deleteMutation.mutate(post.id);
    }
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
              padding={1}
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
                <Button variant="outlined" sx={{color:"black"}} onClick={handleSave}>
                  {t("save")}
                </Button>
                <Button variant="outlined" sx={{color:"black"}} onClick={handleCancel}>
                  {t("cancel")}
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
                <Button variant="outlined" sx={{color:"black"}} onClick={handleEdit}>
                  {t("edit")}
                </Button>
                <Button variant="outlined" sx={{color:"black"}} onClick={handleDelete}>
                  {t("delete")}
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

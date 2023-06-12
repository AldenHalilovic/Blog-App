import React from "react";
import { Box, Typography } from "@mui/material";

export default function NotAuthPage() {
  return (
    <Box width="100%" height="60rem">
      <Box
        display="flex"
        justifyContent="center"
        sx={{
          display:"flex",
          padding: "32px",
          gap: "32px",
          borderRadius: "15px",
          boxShadow: "0px 34px 114px rgba(0, 0, 0, 0.08)",
          width: "50%",
        }}
      >
        <Typography>LOGIN IN TO GET MORE CONTNENT</Typography>
      </Box>
    </Box>
  );
}

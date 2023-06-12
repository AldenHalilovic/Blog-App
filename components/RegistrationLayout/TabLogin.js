import React from "react";
import LoginLayout from "./LoginForm";
import { Box, Typography, Paper, Divider } from "@mui/material";

export default function TabLogin() {
  return (
    <Box width="100%" height="55rem" bgcolor="white">
      <Box
        width="100%"
        height="95%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          padding="32px"
          borderRadius={5}
          boxShadow = "0px 34px 114px rgba(0, 0, 0, 0.08)"
          width="700px"
        >
          <Typography variant="h4" textAlign="center" color="black">
            Login
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={2}
            width="100%"
          >
            <LoginLayout />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

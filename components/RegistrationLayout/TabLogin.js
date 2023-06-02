import React from "react";
import LoginLayout from "./LoginForm";
import { Box, Typography, Paper } from "@mui/material";
import Link from "next/link";

export default function BasicTabs() {
  const today = new Date();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100%"
    >
      
      <Box
        width="100%"
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        zIndex={300}
      >
        <Paper
          sx={{
            zIndex: "1000",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "32px",
            gap: "32px",
            borderRadius: "15px",
            boxShadow: "0px 34px 114px rgba(0, 0, 0, 0.08)",
            width: { xs: "90%", sm: "50%", md: "480px" },
          }}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="row"
            width="100%"
          >
            <Typography variant="h4" textAlign="center" color={"black"}>
            SignIn
            </Typography>
          </Box>
          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            padding={0}
            gap="32px"
          >
            <LoginLayout />
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

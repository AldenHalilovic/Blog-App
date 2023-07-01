import React, { useState } from "react";
import requireAuth from "../auth/requireAuth";
import { useTranslations } from "next-intl";
import { Avatar, Box, Button, Checkbox, IconButton, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import Link from "next/link";

export async function getStaticProps(context) {
  return {
    props: {
      messages: (await import(`../locale/${context.locale}.json`)).default,
    },
  };
}

const Profile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const t = useTranslations("Index", "NotAuth", "Layout");
  const user = useSelector((state) => state.user.user);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box height="100vh">
      <Box display="flex" justifyContent="center" p={5}>
        <h2>{t("MyProfile")}</h2>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box
          sx={{
            padding: "32px",
            height: "290px",
            width: "45%",
            backgroundImage:
              "linear-gradient(120deg,  #557A95, #baccc8, #557A95 100%)",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{
              bgcolor: "Black",
            }}
            alt={`${user?.fname} ${user?.lname}`}
            src={user?.avatar}
          />
          <Box p={1}>Name: {`${user?.fname} ${user?.lname}`}</Box>
          <Box p={1}>Username: {user?.username}</Box>
          <Box p={1}>Email: {user?.email}</Box>

          <Box display="flex" justifyContent="center">
            <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
              type={showPassword ? "text" : "password"}
              value={user?.password}
              readOnly
            />

            <label htmlFor="password-checkbox">
              <Checkbox
                id="password-checkbox"
                color="success"
                checked={showPassword}
                onChange={handleTogglePassword}
              />
            </label>
          </Box>

          <Box display="flex" justifyContent="center" mt={2}>
            <IconButton
              href="https://github.com/AldenHalilovic"
              style={{
                background: "#171515",
                margin: "0 4px",
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                color: "#f5f5f5",
              }}
            >
              <GitHub />
            </IconButton>

            <IconButton
              href="https://twitter.com/#"
              style={{
                background: "#1da1f2",
                margin: "0 4px",
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                color: "#fff",
              }}
            >
              <Twitter />
            </IconButton>

            <IconButton
              href="https://www.instagram.com/#/"
              style={{
                background: "#e1306c",
                margin: "0 4px",
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                color: "#fff",
              }}
            >
              <Instagram />
            </IconButton>

            <IconButton
              href="https://www.linkedin.com/in/alden-halilovic-66925a265/"
              style={{
                background: "#0072b1",
                margin: "0 4px",
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                color: "#fff",
              }}
            >
              <LinkedIn />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default requireAuth(Profile);

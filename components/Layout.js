import {
  Avatar,
  Box,
  MenuItem,
  Button,
  Menu,
  Typography,
  Divider,
  ListItemIcon,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Zeta from "../images/Zeta.png";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/user/userServices";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "next-intl";
import { Logout, Settings } from "@mui/icons-material";


export default function layout({ children }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => state.user.user);
  const t = useTranslations("Layout");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      {/*This is the Navigation Bar (Header)*/}
      <Box width="100%">
        <nav>
          <Box display="flex">
            <LanguageSwitcher />
          </Box>
          <Link href={"/"}>
            <Image src={Zeta} width={140} height={50} alt={""} />
          </Link>
          {router.asPath === "/login" || router.asPath === "/register" ? (
            <></>
          ) : (
            <ul>
              {!user && (
                <>
                  <li>
                    <Link href={"/login"}>
                      <button className="btnstyle">{t("login")}</button>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/register"}>
                      <button className="btnstyle">{t("register")}</button>
                    </Link>
                  </li>
                </>
              )}

              {user && (
                <Box
                  display="flex"
                  sx={{ gap: 1 }}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Box>
                    <Button
                      sx={{
                        border: "2px solid Grey",
                        borderRadius: "200px",
                        p: 0,
                        minWidth: "fit-content",
                        minHeight: "fit-content",
                        m: 0,
                      }}
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                    >
                      <Avatar
                        sx={{ backgroundColor: "black" }}
                        alt={`${user?.fname} ${user?.lname}`}
                        src={user?.avatar}
                        onClick={handleClick}
                      />
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem onClick={handleClose}>
                        <Avatar
                          sx={{ bgcolor: "Black" }}
                          alt={`${user?.fname} ${user?.lname}`}
                          src={user?.avatar}
                          onclick={handleClick}
                        />
                        {user?.fname}
                      </MenuItem>
                      <Divider />

                      <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                          <Settings fontSize="small" />
                        </ListItemIcon>
                        Settings
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          dispatch(logout());
                        }}
                      >
                        <ListItemIcon>
                          <Logout fontSize="small" />
                        </ListItemIcon>
                        {t("logout")}
                      </MenuItem>
                    </Menu>
                  </Box>
                </Box>
              )}
            </ul>
          )}
        </nav>
      </Box>

      {children}

      {/*This is the Footer Bar (Footer)*/}
      <Box width="100%" display="flex">
        <footer>
          <ul className="menu">
            <li>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                href={"https://twitter.com/?lang=en"}
              >
                Twitter
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", olor: "black" }}
                href={
                  "https://www.linkedin.com/?original_referer=https%3A%2F%2Fwww.google.com%2F"
                }
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                href={"https://www.facebook.com/"}
              >
                Facebook
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                href={"https://www.instagram.com/"}
              >
                Instagram
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                href={"https://github.com/AldenHalilovic"}
              >
                Github
              </Link>
            </li>
          </ul>

          <Box className="footer-copyright">
            <Typography>{t("copyrights")}</Typography>
          </Box>
        </footer>
      </Box>
    </Box>
  );
}

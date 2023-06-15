import { Avatar, Box, MenuItem, Button, Menu, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Zeta from "../images/Zeta.png";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/user/userServices";


export default function layout({ children }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => state.user.user);

  
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
      <Box width="100%">
        {/*This is the Navigation Bar (Header)*/}
        <Box width="100%">
          <nav>
            <Box display="flex">
              <Link href={"/"}>
                <Image src={Zeta} width={140} height={50} alt={""} />
              </Link>
            </Box>
            <Box>
              
            </Box>
            {router.asPath === "/login" || router.asPath === "/register" ? (
              <></>
            ) : (
              <ul>

                {!user && (
                  <>
                    <li>
                      <Link href={"/login"}>
                        <button className="btnstyle">Login</button>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/register"}>
                        <button className="btnstyle">Register</button>
                      </Link>
                    </li>
                  </>
                )}
                {user && (
                  <Box
                    display="flex"
                    sx={{ gap: 3 }}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Box>
                      <Button
                        id="basic-button"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                      >
                        <Avatar
                          sx={{ bgcolor: "Black" }}
                          alt={`${user?.fname} ${user?.lname}`}
                          src={user?.avatar}
                          onclick={handleClick}
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
                        <MenuItem onClick={handleClose} >Profile</MenuItem>
                      </Menu>
                    </Box>
                    <button
                      className="btnstyle"
                      onClick={() => {
                        dispatch(logout());
                      }}
                    >
                      Logout
                    </button>
                  </Box>
                )}
              </ul>
            )}
          </nav>
        </Box>
      </Box>

      {children}

      {/*This is the Footer Bar (Footer)*/}
      <Box width="100%" display="flex">
        <footer>
          <ul className="icons">
            <li>
              {/* <Link href={"twitter"}>
                <Image src=""></Image>
              </Link> */}
            </li>
            <li>
              {/* <Link href={"Instagram"}>
                <Image src=""></Image>
              </Link> */}
            </li>
            <li>
              {/* <Link href={"github"}>
                <Image src=""></Image>
              </Link> */}
            </li>
            <li>
              {/* <Link href={"linkedin"}>
                <Image src=""></Image>
              </Link> */}
            </li>
          </ul>
          <ul className="menu">
            <li>
              <Link href={"WIP"}>Twitter</Link>
            </li>
            <li>
              <Link href={"WIP"}>LinkedIn</Link>
            </li>
            <li>
              <Link href={"WIP"}>Facebook</Link>
            </li>
            <li>
              <Link href={"WIP"}>Instagram</Link>
            </li>
            <li>
              <Link href={"WIP"}>Github</Link>
            </li>
          </ul>
          <Box className="footer-copyright">
            <Typography>Copyright @ 2022 All Rights Reserved.</Typography>
          </Box>
        </footer>
      </Box>
    </Box>
  );
}

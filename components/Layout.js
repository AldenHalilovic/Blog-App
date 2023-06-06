import { Avatar, Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Zeta from "../images/Zeta.png";
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/user/userServices";

export default function layout({ children }) {
  const dispatch = useDispatch();
  const [trueEn, setfalseEn] = useState(false);
  const router = useRouter();
  const user = useSelector((state) => state.user.user);
 
  return (
    <Box
      width={"100%"}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box width="100%">
        {/*This is the Navigation Bar (Header)*/}
        <Box width="100%">
          <nav>
            <Box display="flex">
              <Link href={"/"}>
                <Image src={Zeta} width={140} height={60} alt={""} />
              </Link>
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
               {user&& <Box display="flex"
                    sx={{ gap:3 }}
                    justifyContent="center"
                    alignItems="center">
                    <Avatar
                      sx={{ bgcolor: "green", }}
                      alt={`${user?.fname} ${user?.lname}`}
                      src={user?.avatar}
                    />
                  <button
                    className="btnstyle"
                    onClick={() => {
                      dispatch(logout());
                    }}
                  >
                    Logout
                  </button>
                </Box>}
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
              <Link href={"WIP"}>WIP</Link>
            </li>
            <li>
              <Link href={"WIP"}>WIP</Link>
            </li>
            <li>
              <Link href={"WIP"}>WIP</Link>
            </li>
            <li>
              <Link href={"WIP"}>WIP</Link>
            </li>
            <li>
              <Link href={"WIP"}>WIP</Link>
            </li>
          </ul>
          <div className="footer-copyright">
            <p>Copyright @ 2022 All Rights Reserved.</p>
          </div>
        </footer>
      </Box>
    </Box>
  );
}

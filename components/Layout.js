import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Azel from "../images/Azel.png";


export default function layout({ children }) {
  return (
    <Box width={"100%"} display="flex" flexDirection="column">
      <Box width="100%">
        {/*This is the Navigation Bar (Header)*/}
        <Box width="100%">
          <nav>
            <Box display="flex">
              <Image src={Azel} alt="" width={150} height={55}/>
            </Box>
            <ul>
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
            </ul>
          </nav>
        </Box>
      </Box>

      {children}

      {/*This is the Footer Bar (Footer)*/}
      <Box width="100%" display="flex">
        <footer>
          <ul className="icons">
            <li>
              <Link href={"twitter"}>
                <Image src=""></Image>
              </Link>
            </li>
            <li>
              <Link href={"Instagram"}>
                <Image src=""></Image>
              </Link>
            </li>
            <li>
              <Link href={"github"}>
                <Image src=""></Image>
              </Link>
            </li>
            <li>
              <Link href={"linkedin"}>
                <Image src=""></Image>
              </Link>
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

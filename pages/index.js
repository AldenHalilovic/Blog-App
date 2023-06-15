import { Box, Paper, Typography } from "@mui/material";
import requireAuth from "../auth/requireAuth";
import Image from "next/image";
import Link from "next/link";
import UserComponent from "../Components/Hooks/UserComponent";

function Home() {
  return (
    <>
      <Box width="100%" height="100%" bgcolor="white">
        <Box display="flex" justifyContent="center" margin={20}>
          <Box
            sx={{
              padding: "32px",
              height: "650px",
              width: "90%",
              bgcolor: "grey",
              borderTopLeftRadius: "25px",
              borderBottomLeftRadius: "25px",
            }}
          >
            <Typography
              fontSize="50px"
              lineHeight="1.01"
              fontFamily="Rubik"
              sans-serif
              borderRight="3px solid black"
            >
              Do something that other will not
            </Typography>
            <Typography
              fontSize="20px"
              maxWidth="30em"
              lineHeight="1.5"
              margin="0 0 1.5rem"
            >
              text goes here
            </Typography>

            <Image src=""></Image>
          </Box>
          <Box
            sx={{
              padding: "32px",
              height: "650px",
              width: "90%",
              bgcolor: "grey",
              borderTopRightRadius: "25px",
              borderBottomRightRadius: "25px",
            }}
          ></Box>
          <UserComponent userId={1}/>
        </Box>
      </Box>
    </>
  );
}
export default requireAuth(Home);

import React from "react";
import { Box, Input, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import Manthink from "../images/Manthinking.png"

export default function NotAuthPage() {
  return (
    <>
      <Box width="100%" height="100%" bgcolor="#f7e8d3">
        <Box display="flex" justifyContent="center" margin={20}>
          <Box
            sx={{
              borderRight: "2px solid black",
              padding: "32px",
              height: "650px",
              width: "85%",
              background: "rgba(255, 255, 255, 0.7)",
              backdropFilter: " blur(8.3px)",
              borderTopLeftRadius: "25px",
              borderBottomLeftRadius: "25px",
            }}
          >
            <Typography
              fontFamily="Rubik"
              sans-serif
              borderRadius="7px"
              border="2px solid black"
              textTransform="capitalize"
              width="100px"
              display="flex"
              justifyContent="center"
              bgcolor="white"
            >
              How it works
            </Typography>

            <Box padding="20px" borderBottom="3px solid black"></Box>
            <Typography
              fontSize="80px"
              padding="20px"
              lineHeight="1.01"
              margin="0 0 1.5rem"
              fontFamily="Rubik"
              sans-serif
            >
              Revolutionizing cutting-edge ideas
            </Typography>
            <Typography
              fontSize="25px"
              padding="20px"
              lineHeight="1.01"
              margin="0 0 1.5rem"
              fontFamily="Rubik"
              sans-serif
            >
              Getting your ideas is now easier than ever. Receive the our ideas
              now by following these simple steps you can follow for every use.
            </Typography>
            <Box display="flex" padding={3} justify-content="space-evenly">
              <Link href={"/login"}>
                <button className="cssbtn">More Details</button>
              </Link>
            </Box>
          </Box>
          <Box
            sx={{
              padding: "32px",
              height: "650px",
              width: "85%",
              background: "rgba(255, 255, 255, 0.7)",
              backdropFilter: " blur(8.3px)",
              borderTopRightRadius: "25px",
              borderBottomRightRadius: "25px",
            }}
          >
            {/* <Image src={Manthink} width={660} height={660}></Image> */}
          </Box>
        </Box>
      </Box>
    </>
  );
}

import React from "react";
import { Box, Paper, Typography, Positions } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

export default function NotAuthPage() {
  return (
    <>
      <Box width="100%" height="100%">
        <Box display="flex" justifyContent="center" margin={15}>
          <Paper
            sx={{
              borderRadius: "30px",
              padding: "32px",
              height: "630px",
              width: "80%",
              bgcolor: "#f2f7f6",
            }}
          >
            <Box display="flex" justifyContent="center">
              <Typography
                fontFamily="Rubik"
                sans-serif
                textTransform="capitalize"
                fontSize="21px"
                display="flex"
                justifyContent="center"
                color="#9cd462"
                padding="35px"
                fontWeight="bold"
              >
                Our blog
              </Typography>
            </Box>

            <Typography
              fontSize="57px"
              fontFamily="Rubik"
              sans-serif
              display="flex"
              justifyContent="center"
              lineHeight="1.01"
              fontWeight="bold"
            >
              Resources for makers &
            </Typography>
            <Typography
              fontSize="60px"
              fontFamily="Rubik"
              sans-serif
              display="flex"
              justifyContent="center"
              fontWeight="bold"
            >
              creatives to learn, sell & grow
            </Typography>

            <Typography
              fontSize="25px"
              padding="25px"
              fontFamily="Rubik"
              sans-serif
              display="flex"
              justifyContent="center"
            >
              The only corporate card and spend management platform designed to
              help you spend less.
            </Typography>
            <Box display="flex" padding="70px" justifyContent="center">
              <Link href={"/login"}>
                <button className="cssbtn">Get Started</button>
              </Link>
            </Box>
          </Paper>
        </Box>

        
      </Box>

      <Box display="flex" width="40%" margin={4}>
          <Box
            sx={{
              borderRadius: "30px",
              padding: "32px",
              height: "550px",
              width: "60%",
              bgcolor: "grey",
            }}
          ></Box>

          <Box
            sx={{
              borderRadius: "30px",
              padding: "32px",
              height: "250px",
              width: "100%",
              bgcolor: "grey",
            }}
          ></Box>
        </Box>
    </>
  );
}

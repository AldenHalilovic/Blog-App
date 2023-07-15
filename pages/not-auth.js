import React from "react";
import { Box, Paper, Typography, Positions } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

export async function getStaticProps(context) {
  return {
    props: {
      messages: (await import(`../locale/${context.locale}.json`)).default,
    },
  };
}

export default function NotAuthPage() {
  const t = useTranslations("NotAuth");
  return (
    <>
      <Box width="100%" height="100%">
        <Box display="flex" justifyContent="center" margin={15}>
          <Paper
            sx={{
              borderLeft: "4px solid black",
              borderRight: "4px solid black",
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
                sans-serif="true"
                textTransform="capitalize"
                fontSize="21px"
                display="flex"
                justifyContent="center"
                color="#9cd462"
                padding="35px"
                fontWeight="bold"
              >
                {t("blog")}
              </Typography>
            </Box>

            <Typography
              fontSize="57px"
              fontFamily="Rubik"
              sans-serif="true"
              display="flex"
              justifyContent="center"
              lineHeight="1.01"
              fontWeight="bold"
            >
              {t("blogL1")}
            </Typography>
            <Typography
              fontSize="60px"
              fontFamily="Rubik"
              sans-serif="true"
              display="flex"
              justifyContent="center"
              fontWeight="bold"
            >
              {t("blogL2")}
            </Typography>

            <Typography
              fontSize="25px"
              padding="25px"
              fontFamily="Rubik"
              sans-serif="true"
              display="flex"
              justifyContent="center"
            >
              {t("blogL3")}
            </Typography>
            <Box display="flex" padding="70px" justifyContent="center">
              <Link href={"/login"}>
                <button className="cssbtn">{t("blogbtn")}</button>
              </Link>
            </Box>
          </Paper>
        </Box>
      </Box>
    </>
  );
}

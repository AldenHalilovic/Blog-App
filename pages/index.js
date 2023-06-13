import { Box, Paper, Typography } from "@mui/material";
import requireAuth from "../auth/requireAuth";

function Home() {
  return (
    <>
      <Box width="100%" height="100%" bgcolor="white">
        <Box display="flex" justifyContent="center" margin={20}>
          <Paper
            sx={{
              padding: "32px",
              height: "600px",
              width: "35%",
            }}
          ></Paper>
          <Paper
            sx={{
              padding: "32px",
              height: "600px",
              width: "35%",
            }}
          >
            <Typography
              fontSize="80px"
              lineHeight="1.01"
              fontFamily="Rubik"
              sans-serif
            >
              something something
            </Typography>
            <Typography
              fontSize="20px"
              maxWidth="30em"
              lineHeight="1.5"
              margin="0 0 1.5rem"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Typography>
          </Paper>
        </Box>
        <Box display="flex" justifyContent="center" margin={10}></Box>
      </Box>
    </>
  );
}
export default requireAuth(Home);

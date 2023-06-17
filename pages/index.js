import { Box, Divider, Paper, Typography } from "@mui/material";
import requireAuth from "../auth/requireAuth";
import UserComponent from "../Components/UserComponent";
import PostComponent from "../Components/PostComponent";

function Home() {
  return (
    <Box
      display="flex"
      width="100%"
      height="100vh"
      bgcolor="white"
      justifyContent="flex-end"
    >
      <Box>
        <Box
          sx={{
            borderLeft: "4px solid black",
            borderBottom: "4px solid black",
            padding: "22px",
            height: "220px",
            width: "80%",
            bgcolor: "#EDE4E3",
            borderRadius: "15px",
          }}
          margin={10}
          gap="10px"
          flexDirection="column"
        >
          <UserComponent userId={1} />
          <PostComponent pageId={1} />
        </Box>

        <Box
          sx={{
            borderLeft: "4px solid black",
            borderBottom: "4px solid black",
            padding: "22px",
            height: "220px",
            width: "80%",
            bgcolor: "#EDE4E3",
            borderRadius: "15px",
          }}
          margin={10}
          gap="10px"
          flexDirection="column"
        >
          <UserComponent userId={2} />
          <PostComponent pageId={2} />
        </Box>
      </Box>
      <Box width="30%" height="100%" p="15px">
        <Box
          margin={7}
          sx={{
            borderRight: "4px solid black",
            borderBottom: "4px solid black",
            padding: "32px",
            height: "530px",
            width: "60%",
            bgcolor: "#EDE4E3",
            borderRadius: "15px",
          }}
        >
          {/* <Typography></Typography> */}
        </Box>
      </Box>
    </Box>
  );
}
export default requireAuth(Home);

import LoginForm from "../Components/LoginForm";
import Layout from "../Components/Layout";
import { Box } from "@mui/material";

export default function Login() {
  return (
    <Layout>
      <Box
        display="flex"
        width="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Box width="20%" marginTop="40px">
          <LoginForm />
        </Box>
      </Box>
    </Layout>
  );
}

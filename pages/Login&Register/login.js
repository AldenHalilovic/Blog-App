import LoginForm from "../../Components/LoginForm";
import Layout from "../../Components/Layout";
import { Box } from "@mui/material";
import TabRegister from "../../Components/RegistrationLayout/TabRegister"

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
          {/* <LoginForm /> */}
          <TabRegister/>
        </Box>
      </Box>
    </Layout>
  );
}

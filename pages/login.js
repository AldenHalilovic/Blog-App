import { Box } from "@mui/material";
import TabLogin from "../Components/RegistrationLayout/TabLogin"

export default function Login() {
  return (

      <Box
        display="flex"
        width="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Box width="20%" marginTop="40px">
          <TabLogin/>
        </Box>
      </Box>
  );
}

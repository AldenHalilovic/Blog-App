import { Box } from "@mui/material";
import TabLogin from "../Components/RegistrationLayout/TabLogin"
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter()
  const user = useSelector(state => state.user.user)
  useEffect(() => {
    if (user){
      router.push("/")
    }
  }, [user])
 
  return (

      <Box
        display="flex"
        width="100%"
        justifyContent="center"
        alignItems="center"
      >
        
        <Box width="450px">
          <TabLogin/>
        </Box>
      </Box>
  );
}

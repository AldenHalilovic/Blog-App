import TabRegister from "../Components/RegistrationLayout/TabRegister"
import { Box } from "@mui/material"


export default function Register(){
    return(
 <Box display="flex" width="100%" justifyContent="center"  alignItems='center'>

 <Box width="450px" >
 <TabRegister/>
 </Box>

 </Box>


       
    )
}
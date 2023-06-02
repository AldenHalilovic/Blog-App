
import Layout from "../components/Layout"
import { Box } from "@mui/material"
import TabRegister from "../components/RegistrationLayout/TabRegister"


export default function Login(){
    return(
 <Layout>
 <Box display="flex" width="100%" justifyContent="center"  alignItems='center'>

 <Box width="20%" marginTop='40px'>
 <TabRegister/>
 
 </Box>

 </Box>


 </Layout>
       
    )
}
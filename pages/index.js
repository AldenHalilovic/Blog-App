import { PersistGate } from "redux-persist/integration/react";
import Layout from "../Components/Layout";
import { store } from "../store"
import { Provider } from "react-redux";
import { Box,Paper,Typography } from "@mui/material";
import requireAuth from "../auth/requireAuth";


 function Home() {
  return (
   <>
 <Box width='100%' height='60rem' bgcolor='white'>
 
 </Box>
   </>    
   
  );
}
export default requireAuth(Home)

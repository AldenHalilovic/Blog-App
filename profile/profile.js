import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';


const Profile = () => {
    const [userData, setUserData] = useState(null);
  
    useEffect(() => {
      fetchUserData();
    }, []);
  
    const fetchUserData = async () => {
      try {
        const response = await fetch('your_backend_api_url');
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
  
    return (
      <Box>
        {userData ? (
          <Box>
            <h2>{userData.name}</h2>
            <Typography>Email: {userData.email}</Typography>
            <Typography>User: {userData.location}</Typography>
            {/* Add additional fields based on your user data */}
          </Box>
        ) : (
          <Typography>Loading user data...</Typography>
        )}
      </Box>
    );
  };
  
  export default Profile;
  
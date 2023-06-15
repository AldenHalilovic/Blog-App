import { useGetUser } from './useGetUser';
import { Box } from '@mui/material';

const UserComponent = ({ userId }) => {
  const { data: user, isLoading: isUserLoading, isError: isUserError } = useGetUser({id: userId });
  console.log(user)

  if (isUserLoading) {
    return <Box>Loading...</Box>;
  }

  if (isUserError) {
    return <Box>Error fetching user</Box>;
  }

  return (
    <Box>
      <h1>Name: {user?.name}</h1>
      <p>Email: {user?.email}</p>
    </Box>
  );
};

export default UserComponent;
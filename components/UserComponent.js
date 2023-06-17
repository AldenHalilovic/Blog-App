import { useGetUser } from "../Hooks/useGetUser";
import { Box } from "@mui/material";

const UserComponent = ({ userId }) => {
  const { data: user, isLoading, isError } = useGetUser(userId);

  if (isLoading) {
    return <Box>Loading...</Box>;
  }

  if (isError) {
    return <Box>Error fetching user</Box>;
  }

  return (
    <Box padding={1}>
      <h2>Name: {user?.name}</h2>
      <h5>{user?.email}</h5>
    </Box>
  );
};

export default UserComponent;

import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField, Typography, Box } from "@mui/material";
import Link from "next/link";
import axios from "axios";
import { register } from "../../services/authServices";

const defaultValues = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
};

const registrationFormSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
});

export default function RegistrationForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registrationFormSchema),
    defaultValues,
  });

  const onSubmit = (data) => {
    // axios.get("/dbUser.json").then((response) => {
    //   const dbUser = response.data;
    //   const isDataMatched = Object.values(dbUser).some(
    //     (value) =>
    //       value.email === data.email && value.password === data.password
    //   );
    //   if (isDataMatched) {
    //     console.log("Thank you for you're registration")
    //   } else {
    //     console.log("Invalid email or password!");
    //   }
    // });

    register(data).then((res) => console.log(res));
  };

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <Box
        width="100%"
        justifyContent="space-evenly"
        gap={"1rem"}
      >


        <Controller
          control={control}
          name="FirstName"
          render={({ field }) => (
            <TextField
              autoFocus
              fullWidth
              id="FirstName"
              label="First Name"
              sx={{ mb: 3 }}
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="LastName"
          render={({ field }) => (
            <TextField
              autoFocus
              fullWidth
              id="LastName"
              label="Last Name"
              sx={{ mb: 3 }}
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <TextField
              autoFocus
              fullWidth
              id="email"
              label="Email"
              sx={{ mb: 3 }}
              error={!!errors.email}
              helperText={errors.email?.message}
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <TextField
              autoFocus
              fullWidth
              id="password"
              label="Password"
              type={"password"}
              sx={{ mb: 3 }}
              error={!!errors.password}
              helperText={errors.password?.message}
              {...field}
            />
          )}
        />

        <Button
          variant="contained"
          sx={{
            bgcolor: "#afa08b",
            textTransform: "none",
            borderRadius: "15px",
            paddingY: "12px",
            paddingX: "25px",
            color: "white",
            width: "100%",
            "&:hover": {
              backgroundColor: "#5e505c",
            },
          }}
          type="submit"
        >
          Register
        </Button>
        <>
          <Typography
            display="flex"
            justifyContent="space-evenly"
            alignItems="baseline"
            sx={{ padding: "20px" }}
            variant="body2"
            fontWeight="700"
            color="#0F5D66"
          >
            Already have an account{" "}
            <Link href="/login" style={{textDecoration:"none", color: "green"}}>
             Login
            </Link>
          </Typography>
        </>
      </Box>
    </form>
  );
}

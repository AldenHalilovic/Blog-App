import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Typography, Box, Button } from "@mui/material";
import { useState } from "react";
import Link from "next/link";
import { login } from "../../store/user/userServices";
import { useDispatch } from "react-redux";

const LoginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

export default function LoginForm() {
  const dispatch = useDispatch()
  const defaultValues = {
    email: "",
    password: "",
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const [open, setOpen] = useState(false);

  const onSubmit = (data) => {
    // get("/dbUser.json").then((response) => {
    //   const dbUser = response.data;
    //   const isDataMatched = Object.values(dbUser).some(
    //     (value) =>
    //       value.email === data.email && value.password === data.password
    //   );
    //   if (isDataMatched) {
    //     console.log("Login was Succseful")
    //   } else {
    //     console.log("Invalid email or password!");
    //   }
    // });
    const {email,password} = data;
    console.log(email,password)
    dispatch(login({email,password}))
  };

  return (
    <Box
      display="flex"
      width="100%"
      flexDirection="column"
      justifyContent="space-evenly"
    >
      <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <TextField
              margin="normal"
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
              margin="normal"
              autoFocus
              fullWidth
              id="password"
              label="Password"
              type={"password"}
              sx={{ mb: 4 }}
              error={!!errors.password}
              helperText={errors.password?.message}
              {...field}
            />
          )}
        />
    
          <Button
            variant="contained"
            display="flex"
            justifyContent="center"
            type="submit"
            sx={{
              backgroundImage: "linear-gradient(100deg, #efd1a8, #f7e8d3, #efd1a8 100%)",
              textTransform: "none",
              borderRadius: "15px",
              color: "#1a1a1a",
              height: "50px",
              width: "100%",
            }}
          >
            Login
          </Button>
        <>
          <Link
            href="/register"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Typography
              display="flex"
              justifyContent="space-evenly"
              alignItems="baseline"
              sx={{ padding: "25px" }}
              variant="body2"
              fontWeight="700"
            >
              Create an Account
            </Typography>
          </Link>
        </>
      </form>
    </Box>
  );
}

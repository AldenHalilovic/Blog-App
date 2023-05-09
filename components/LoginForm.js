import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, Button, Snackbar, TextField } from "@mui/material";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";

const LoginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

export default function LoginForm() {
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

    axios.get("/dbUser.json").then((response) => {
      const dbUser = response.data;
      const isDataMatched = Object.values(dbUser).some(
        (value) =>
          value.email === data.email && value.password === data.password
      );
      if (isDataMatched) {
        console.log("Login was Succseful")
      } else {
        console.log("Invalid email or password!");
      }
    });
  };

  return (
    <>
      <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <TextField
              autoFocus
              fullWidth
              id="email"
              label="Email"
              sx={{ mb: 4 }}
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
              sx={{ mb: 4 }}
              error={!!errors.password}
              helperText={errors.password?.message}
              {...field}
            />
          )}
        />
        <Button
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          sx={{ mb: 7 }}
        >
          Login
        </Button>
        <Link href="/register">
          <Button
            fullWidth
            size="large"
            type="submit"
            variant="outlined"
            sx={{ mb: 7 }}
          >
            DON'T HAVE AN ACCOUNT : REIGSTER
          </Button>
        </Link>
      </form>
      <Snackbar open={open} autoHideDuration={200}>
        <Alert severity="error" sx={{ width: "100%" }}>
          Email Not Valid
        </Alert>
      </Snackbar>
    </>
  );
}

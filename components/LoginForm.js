import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import Link from "next/link";

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

  const onSubmit = (data) => {
    fetch("http://localhost:3000/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          router.push("/dashboard");
        } else {
          setError("email", {
            type: "manual",
            message: "Invalid email or password",
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
  return (
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
  );
}

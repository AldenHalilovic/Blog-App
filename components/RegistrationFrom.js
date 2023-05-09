import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField } from "@mui/material";
import Link from "next/link";

const defaultValues = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
};

const registrationFormSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
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
    console.log(data);
  };

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="firstName"
        render={({ field }) => (
          <TextField
            autoFocus
            fullWidth
            id="firstName"
            label="First Name"
            sx={{ mb: 4 }}
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="lastName"
        render={({ field }) => (
          <TextField
            autoFocus
            fullWidth
            id="lastName"
            label="Last Name"
            sx={{ mb: 4 }}
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
        Register
      </Button>
      <Link href="/login">
        <Button
          fullWidth
          size="large"
          type="submit"
          variant="outlined"
          sx={{ mb: 7 }}
        >
          HAVE AN ACCOUNT : LOGIN
        </Button>
      </Link>
    </form>
  );
}

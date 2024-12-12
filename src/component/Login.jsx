import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import moment from "moment";
import React, { useState } from "react";
import "../styles/login.css";
import { usePostLoginMutation } from "../api/loginapi";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../schemas/validations";
import MessageSnackbar from "./mui_snackbar/MessageSnackbar.jsx";
import { useLogin } from "../hooks/useLogin.js";
import { SNACKBAR_COLOR } from "../constants/messages.js";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const navigate = useNavigate();

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: SNACKBAR_COLOR.success,
  });

  const [errorMessage, setErrorMessage] = useState({
    emailError: "",
    passError: "",
  });

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const { onLoginSubmit } = useLogin(setSnackbar, navigate, setErrorMessage);

  return (
    <Box className="container">
      <Box className="Login-containerBox">
        <Typography align="center" variant="h5">
          Login
        </Typography>
        <form action="" onSubmit={handleSubmit(onLoginSubmit)}>
          <Box className="textFieldBox">
            <TextField
              label="Email"
              type="text"
              {...register("email")}
              size="small"
              error={!!errors?.email?.message || !!errorMessage.emailError}
              helperText={errors?.email?.message || errorMessage.emailError}
            />
          </Box>
          <Box className="textFieldBox">
            <TextField
              label="Password"
              type="password"
              {...register("password")}
              size="small"
              error={!!errors?.password?.message || !!errorMessage.passError}
              helperText={errors?.password?.message || errorMessage.passError}
            />
          </Box>
          <Button
            variant="contained"
            size="small"
            className="LoginBtn"
            type="submit"
          >
            LOGIN
          </Button>
        </form>
        <Typography variant="caption">
          Don't have account? Click <Link href="/register">here</Link>.
        </Typography>
        <Typography variant="caption">
          <Link href="/">Home</Link>
        </Typography>
        {/* <Box>
        <Typography>{moment(date.toString()).format("YYYY")}</Typography>
      </Box> */}
      </Box>
      <MessageSnackbar
        open={snackbar.open}
        onClose={handleCloseSnackbar}
        severity={snackbar.severity}
        message={snackbar.message}
      />
    </Box>
  );
};

export default Login;

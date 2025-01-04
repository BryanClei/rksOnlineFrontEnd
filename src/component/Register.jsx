import { Box, Link, TextField, Typography } from "@mui/material";
import { DISPLAY_TEXT } from "../constants/messages";
import React from "react";
import "../styles/register.css";

function Register() {
  return (
    <Box className="Register-containerBox">
      <Typography>Register</Typography>
      <Box>
        <TextField
          label="First Name"
          type="text"
          onChange={() => setUsername(e.target.value)}
          size="small"
        />
      </Box>
      <Box>
        <TextField
          label="Middle Name"
          type="text"
          onChange={() => setUsername(e.target.value)}
          size="small"
        />
      </Box>
      <Box>
        <TextField
          label="Last Name"
          type="text"
          onChange={() => setUsername(e.target.value)}
          size="small"
        />
      </Box>
      <Box>
        <TextField
          label="Username"
          type="text"
          onChange={() => setUsername(e.target.value)}
          size="small"
        />
      </Box>
      <Box>
        <TextField
          label="Password"
          type="password"
          onChange={() => setPassword(e.target.value)}
          size="small"
        />
      </Box>
      <Typography>
        {DISPLAY_TEXT.haveAccount}{" "}
        <Link href="/login">{DISPLAY_TEXT.login}</Link>
      </Typography>
      <Link href="/"> {DISPLAY_TEXT.home} </Link>
    </Box>
  );
}

export default Register;

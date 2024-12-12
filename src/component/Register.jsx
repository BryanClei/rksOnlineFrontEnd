import { Box, Link, TextField, Typography } from "@mui/material";
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
      <Link href="/"> Back </Link>
    </Box>
  );
}

export default Register;

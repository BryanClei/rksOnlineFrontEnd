import { FirstPage, KeyboardBackspaceOutlined } from "@mui/icons-material";
import { Box, Button, Link, Typography } from "@mui/material";

import React from "react";

const Index = () => {
  return (
    <Box>
      <Typography>Index</Typography>
      <Button
        href="/login"
        startIcon={<KeyboardBackspaceOutlined sx={{ pb: 0.3 }} />}
        variant="contained"
        size="small"
      >
        Login
      </Button>
    </Box>
  );
};

export default Index;

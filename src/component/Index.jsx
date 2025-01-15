import React from "react";
import { FirstPage, KeyboardBackspaceOutlined } from "@mui/icons-material";
import { Box, Button, Link, Toolbar, Typography } from "@mui/material";
import ResponsiveNavbar from "./navbar/ResponsiveNavbar";
import HeroSection from "./hero/hero_section";

const Index = () => {
  return (
    <Box>
      <ResponsiveNavbar />
      <Toolbar />
      <Box
        sx={{
          marginTop: { xs: "-112px", md: "-112px", maxWidth: "100%" }, // Adjust for navbar height
        }}
      >
        <HeroSection />
      </Box>
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

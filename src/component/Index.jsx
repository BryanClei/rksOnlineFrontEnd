import React from "react";
import { FirstPage, KeyboardBackspaceOutlined } from "@mui/icons-material";
import { Box, Button, Link, Toolbar, Typography } from "@mui/material";
import ResponsiveNavbar from "./navbar/ResponsiveNavbar";
import HeroSection from "./hero/hero_section";

const Index = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ResponsiveNavbar />
      <Toolbar />
      <Box sx={{ flex: 1 }}>
        <HeroSection sx={{ width: "100%" }} />
      </Box>
    </Box>
  );
};

export default Index;

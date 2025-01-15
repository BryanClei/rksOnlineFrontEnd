import React from "react";
import heroStyles from "../../styles/hero_styles/hero_section.styles";
import { Box, Button, Typography } from "@mui/material";

const HeroSection = () => {
  return (
    <Box sx={heroStyles.container}>
      <Typography variant="h2">Welcome to Our Shop</Typography>
      <Typography variant="h6">
        Discover the best products tailored just for you.
      </Typography>
      <Button
        variant="contained"
        size="large"
        sx={{ backgroundColor: "primary.main" }}
      >
        Shop Now
      </Button>
    </Box>
  );
};

export default HeroSection;

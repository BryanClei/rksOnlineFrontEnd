import React from "react";
import useResponsiveNavbar from "../../hooks/useResponsiveNavbar";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import {
  NAVBAR_TEXT,
  USER_SETTINGS,
  SHOP_IMAGE,
} from "../../constants/messages";

function ResponsiveNavbar() {
  const {
    anchorElNav,
    anchorElUser,
    handleOpenNavMenu,
    handleOpenUserMenu,
    handleCloseNavMenu,
    handleCloseUserMenu,
  } = useResponsiveNavbar();

  return (
    <AppBar
      position="fixed"
      sx={{ background: "linear-gradient(to left, #FF844b, #FF503b)" }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="open navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <Box
                component="img"
                src={SHOP_IMAGE.url}
                alt="Logo"
                sx={{
                  width: "100%",
                  maxWidth: 60,
                  height: "auto",
                  padding: 2,
                  borderRadius: "30%",
                  overflow: "hidden",
                }}
              ></Box>
              {NAVBAR_TEXT.pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography
                    component="a"
                    href={page.href}
                    sx={{ textDecoration: "none", color: "inherit" }}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Drawer>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              gap: 5,
              alignItems: "center",
            }}
          >
            {/* <Box
              component="img"
              src={SHOP_IMAGE.url}
              alt="Logo"
              sx={{
                width: "100%",
                maxWidth: 70,
                height: "auto",
                borderRadius: 2,
                boxShadow: 1,
              }}
            ></Box> */}
            {NAVBAR_TEXT.pages.map((page) => (
              <Button
                variant="outlined"
                key={page.name}
                sx={{
                  my: 2,
                  color: "#ffff",
                  display: "block",
                  borderRadius: "20px",
                  borderColor: "white"
                }}
                href={page.href}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip> */}
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {USER_SETTINGS.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveNavbar;

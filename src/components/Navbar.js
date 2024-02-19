import React from "react";
import { AppBar, Toolbar, Button, Typography, IconButton } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = ({ toggleDrawer }) => {
  return (
    <AppBar
      position="sticky"
      sx={{ left: 0, right: 0, backgroundColor: "#182442" }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" component="div">
          Gourav
        </Typography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <ScrollLink to="home" smooth={true} duration={500}>
            <Button
              color="inherit"
              sx={{
                display: { xs: "none", md: "block" },
                marginX: 1,
                "&.active": {
                  color: "white",
                },
              }}
            >
              Home
            </Button>
          </ScrollLink>
          <ScrollLink to="about-me" smooth={true} duration={500} offset={-50}>
            <Button
              color="inherit"
              sx={{
                display: { xs: "none", md: "block" },
                marginX: 1,
                "&.active": {
                  color: "white",
                },
              }}
            >
              About Me
            </Button>
          </ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={500} offset={-50}>
            <Button
              color="inherit"
              sx={{
                display: { xs: "none", md: "block" },
                marginX: 1,
                "&.active": {
                  color: "white",
                },
              }}
            >
              Projects
            </Button>
          </ScrollLink>
          <ScrollLink to="contact-me" smooth={true} duration={500} offset={-50}>
            <Button
              color="inherit"
              sx={{
                display: { xs: "none", md: "block" },
                marginX: 1,
                "&.active": {
                  color: "white",
                },
              }}
            >
              Contact Me
            </Button>
          </ScrollLink>
        </div>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={() => toggleDrawer(true)}
          sx={{ ml: 2, display: { xs: "block", md: "block", lg: "none" } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

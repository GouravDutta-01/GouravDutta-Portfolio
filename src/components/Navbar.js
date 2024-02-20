import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import MailIcon from "@mui/icons-material/Mail";
import { Link as ScrollLink } from "react-scroll";
import { ListItemIcon } from "@mui/material";

const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "#182442" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Gourav
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" }, flexGrow: 1 }}>
            <ScrollLink to="home" smooth={true} duration={500} offset={-50}>
              <Button sx={{ color: "#fff", marginRight: 3 }}>Home</Button>
            </ScrollLink>
            <ScrollLink to="about-me" smooth={true} duration={500} offset={-50}>
              <Button sx={{ color: "#fff", marginRight: 3 }}>About Me</Button>
            </ScrollLink>
            <ScrollLink to="projects" smooth={true} duration={500} offset={-50}>
              <Button sx={{ color: "#fff", marginRight: 3 }}>Projects</Button>
            </ScrollLink>
            <ScrollLink
              to="contact-me"
              smooth={true}
              duration={500}
              offset={-50}
            >
              <Button sx={{ color: "#fff", marginRight: 3 }}>Contact Me</Button>
            </ScrollLink>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, marginLeft: "auto" }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          anchor="right"
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              backgroundColor: "#10283f",
              color: "white",
              height: "100%",
            }}
            onClick={handleDrawerToggle}
          >
            <Typography variant="h6" sx={{ my: 5 }}></Typography>
            <List>
              <ListItem disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemIcon>
                    <HomeIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ScrollLink
                    to="home"
                    smooth={true}
                    duration={500}
                    offset={-50}
                    onClick={handleDrawerToggle}
                  >
                    <ListItemText primary="Home" />
                  </ScrollLink>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemIcon>
                    <PersonIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ScrollLink
                    to="about-me"
                    smooth={true}
                    duration={500}
                    offset={-50}
                    onClick={handleDrawerToggle}
                  >
                    <ListItemText primary="About Me" />
                  </ScrollLink>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemIcon>
                    <WorkIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ScrollLink
                    to="projects"
                    smooth={true}
                    duration={500}
                    offset={-50}
                    onClick={handleDrawerToggle}
                  >
                    <ListItemText primary="Projects" />
                  </ScrollLink>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemIcon>
                    <MailIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ScrollLink
                    to="contact-me"
                    smooth={true}
                    duration={500}
                    offset={-50}
                    onClick={handleDrawerToggle}
                  >
                    <ListItemText primary="Contact Me" />
                  </ScrollLink>
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </nav>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;

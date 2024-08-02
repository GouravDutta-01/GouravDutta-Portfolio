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
import CloseIcon from "@mui/icons-material/Close";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import MailIcon from "@mui/icons-material/Mail";
import { Link as ScrollLink } from "react-scroll";
import { ListItemIcon } from "@mui/material";

const drawerWidth = 260;

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
              width: drawerWidth,
              height: "auto",
              backgroundColor: "#10283f",
              boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
              margin: "16px",
              borderRadius: "8px",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 2,
              backgroundColor: "#10283f",
              color: "white",
            }}
          >
            <Typography variant="h6">Menu</Typography>
            <IconButton onClick={handleDrawerToggle}>
              <CloseIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>
          <List>
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              offset={-50}
              onClick={handleDrawerToggle}
            >
              <ListItem disablePadding>
                <ListItemButton sx={{ backgroundColor: "#10283f" }}> 
                  <ListItemIcon>
                    <HomeIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Home" sx={{ color: "white" }} />
                </ListItemButton>
              </ListItem>
            </ScrollLink>
            <ScrollLink
              to="about-me"
              smooth={true}
              duration={500}
              offset={-50}
              onClick={handleDrawerToggle}
            >
              <ListItem disablePadding>
                <ListItemButton sx={{ backgroundColor: "#10283f" }}>
                  <ListItemIcon>
                    <PersonIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="About Me" sx={{ color: "white" }} />
                </ListItemButton>
              </ListItem>
            </ScrollLink>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              offset={-50}
              onClick={handleDrawerToggle}
            >
              <ListItem disablePadding>
                <ListItemButton sx={{ backgroundColor: "#10283f" }}>
                  <ListItemIcon>
                    <WorkIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Projects" sx={{ color: "white" }} />
                </ListItemButton>
              </ListItem>
            </ScrollLink>
            <ScrollLink
              to="contact-me"
              smooth={true}
              duration={500}
              offset={-50}
              onClick={handleDrawerToggle}
            >
              <ListItem disablePadding>
                <ListItemButton sx={{ backgroundColor: "#10283f" }}>
                  <ListItemIcon>
                    <MailIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Contact Me" sx={{ color: "white" }} />
                </ListItemButton>
              </ListItem>
            </ScrollLink>
          </List>
        </Drawer>
      </nav>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;

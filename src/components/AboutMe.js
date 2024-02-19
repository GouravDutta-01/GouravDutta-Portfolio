import React from "react";
import { Typography, Paper, Grid } from "@mui/material";
import myImage from "../assets/dp.png";

const AboutMe = () => {
  return (
    <div
      id="about-me"
      style={{
        textAlign: "center",
        minHeight: "100vh",
        backgroundColor: "#0d2b34",
        color: "white",
        padding: "20px",
        boxSizing: "border-box", 
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper elevation={0} style={{ padding: '20px', fontFamily: "Arial, sans-serif", paddingBottom: '40px', backgroundColor: '#0d2b34' }}>
        <Typography
          variant="h4"
          style={{ fontFamily: "Georgia, serif", marginTop: "20px", fontSize: "2.5rem", marginBottom: "10px", color: 'white' }}
        >
          ABOUT ME
        </Typography>
        <Grid container justifyContent="center">
          <Grid item>
            <img src={myImage} alt="img" style={{ width: "200px", borderRadius: "50%", marginTop: "10px" }} />
          </Grid>
        </Grid>
        <Typography
          variant="h6"
          style={{ fontFamily: "Georgia, serif", marginTop: "20px", marginBottom: "20px", color: 'white' }}
        >
          I'm a pre-final year student pursuing Electronics and
          Telecommunication Engineering at Jadavpur University, Kolkata. I'm a
          passionate web developer with expertise in MERN stack technologies. I
          specialize in crafting innovative and user-centric web applications.
          My journey involves exploring exciting libraries and frameworks to
          create seamless and visually appealing user experiences. Additionally,
          my enthusiasm extends to the realm of machine learning, and I'm eager
          to integrate intelligent solutions into the world of web development.
          Let's build something amazing together!
        </Typography>
      </Paper>
    </div>
  );
};

export default AboutMe;

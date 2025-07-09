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
      <Paper
        elevation={0}
        style={{
          padding: "20px",
          fontFamily: "Arial, sans-serif",
          paddingBottom: "40px",
          backgroundColor: "#0d2b34",
        }}
      >
        <Typography
          variant="h4"
          style={{
            fontFamily: "Georgia, serif",
            marginTop: "20px",
            fontSize: "2.5rem",
            marginBottom: "10px",
            color: "white",
          }}
        >
          ABOUT ME
        </Typography>
        <Grid container justifyContent="center">
          <Grid item>
            <img
              src={myImage}
              alt="img"
              style={{ width: "200px", borderRadius: "50%", marginTop: "10px" }}
            />
          </Grid>
        </Grid>
        <Typography
          variant="h6"
          style={{
            fontFamily: "Georgia, serif",
            marginTop: "20px",
            marginBottom: "20px",
            color: "white",
          }}
        >
          Hi! I'm a graduate in Electronics and Telecommunication Engineering
          from Jadavpur University (2025) with a deep passion for building
          modern, impactful web applications. I specialize in full-stack
          development using the MERN stack (MongoDB, Express.js, React,
          Node.js). I love turning ideas into scalable, user-friendly products —
          whether it's designing clean interfaces, building efficient APIs, or
          structuring robust system architectures. I'm also fascinated by system
          design and enjoy thinking about how applications scale and stay
          maintainable over time. Alongside web development, I've been exploring
          machine learning and how intelligent features can enhance user
          experience and solve real-world problems. Curious by nature and always
          learning, I'm excited by opportunities to collaborate, grow, and build
          tech that truly makes a difference. Let's connect and create something
          meaningful!
        </Typography>
      </Paper>
    </div>
  );
};

export default AboutMe;

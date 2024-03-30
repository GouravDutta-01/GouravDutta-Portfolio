import React from "react";
import { Card, CardContent, Typography, Grid, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkIcon from "@mui/icons-material/Link";
import project1Image from "../assets/the-blog-cafe.png";
import project2Image from "../assets/saferoads.png";
import project3Image from "../assets/text-ninja.png";
import project4Image from "../assets/opcode-converter.png";
import project5Image from "../assets/edit-ninja.png";
import project6Image from "../assets/daily-task-tracker.png";
import project7Image from "../assets/laptop-price-predictor.png";

const Projects = () => {
  const projects = [
    {
      title: "The-Blog-Cafe",
      description:
        "The-Blog-Cafe is a responsive and user-friendly blog management web application with Material-UI and React.js frontend, Express.js, Node.js, and MongoDB backend, featuring user authentication and CRUD operations.",
      githubLink: "https://github.com/GouravDutta-01/The-Blog-Cafe",
      youtubeLink: "https://www.youtube.com/watch?v=hS_dUY9Wsm8",
      deployedLink: "",
      image: project1Image,
    },
    {
      title: "SafeRoads",
      description:
        "SafeRoads is a user-friendly web application with React.js and Material UI and established a Flask server, facilitating seamless integration with the machine learning model for effective user-system communication.",
      githubLink: "https://github.com/sadiqebrahim/SafeRoads",
      youtubeLink: "",
      deployedLink: "",
      image: project2Image,
    },
    {
      title: "Text-Ninja",
      description:
        "Text-Ninja is a responsive text manipulation web application with case conversion, trimming, and first-letter capitalization. It includes clipboard functionality, random text generation, and text analytics for reading time, word count, and character insights. The user-friendly interface allows personalization with six color themes",
      githubLink: "https://github.com/GouravDutta-01/Text-Ninja",
      youtubeLink: "https://www.youtube.com/watch?v=zkN8NtOofBQ",
      deployedLink: "https://gouravdutta-01.github.io/Text-Ninja/",
      image: project3Image,
    },
    {
      title: "Opcode-Converter",
      description:
        "Opcode-Converter is a responsive and user-friendly web application for the Intel 8085 Microprocessor, streamlining opcode retrieval by allowing students to input mnemonics. The intuitive interface enhances efficiency by eliminating the need for manual opcode lookup.",
      githubLink: "https://github.com/GouravDutta-01/Opcode-Converter",
      youtubeLink: "https://www.youtube.com/watch?v=ajE7wJLIU3A",
      deployedLink: "https://gouravdutta-01.github.io/Opcode-Converter/",
      image: project4Image,
    },
    {
      title: "Edit-Ninja",
      description:
        "Edit-Ninja is a Flask-based web application utilizing OpenCV for diverse image processing tasks, such as format conversion (JPG, PNG), grayscale conversion, cropping, resizing (350x350 px, 1000x1000 px), rotation, and various blur and filter applications.",
      githubLink: "https://github.com/GouravDutta-01/Edit-Ninja",
      youtubeLink: "https://www.youtube.com/watch?v=zv7emj02o48",
      deployedLink: "",
      image: project5Image,
    },
    {
      title: "Daily-Task-Tracker",
      description:
        "Daily-Task-Tracker is a web application built using the Streamlit framework that helps you efficiently manage your daily tasks. Keep track of your tasks, mark them as completed, and visualize your progress using a dynamic bar plot.",
      githubLink: "https://github.com/GouravDutta-01/Daily-Task-Tracker",
      youtubeLink: "",
      deployedLink: "https://daily-task-tracker.streamlit.app/",
      image: project6Image,
    },
    {
      title: "Laptop-Price-Predictor",
      description:
        "Laptop-Price-Predictor is a web application built using Streamlit Framework that predicts Laptop Prices using Random Forest Regressor model based on its specifications mentioned by the user.",
      githubLink: "https://github.com/GouravDutta-01/laptop-price-predictor",
      youtubeLink: "",
      deployedLink: "https://laptop-price-predictor-gouravdutta-01.streamlit.app/",
      image: project7Image,
    }
  ];

  return (
    <div
      id="projects"
      style={{
        padding: "20px",
        textAlign: "center",
        backgroundColor: "#0e3647",
        color: "white",
      }}
    >
      <Typography
        variant="h4"
        style={{
          fontFamily: "Georgia, serif",
          marginTop: "20px",
          fontSize: "2.5rem",
          marginBottom: "40px",
          color: "white",
        }}
      >
        MY PROJECTS
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Card
              style={{
                backgroundColor: "#07344c",
                color: "white",
                padding: "10px",
                marginBottom: "20px",
              }}
            >
              <img
                src={project.image}
                alt={`Project ${index + 1}`}
                style={{ width: "100%", height: 250, objectFit: "cover" }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ paddingBottom: "10px", fontWeight: "bold" }}
                >
                  {project.title}
                </Typography>
                <Typography sx={{ height: "220px" }}>
                  {project.description}
                </Typography>
                {project.githubLink.length > 0 && (
                  <IconButton
                    color="success"
                    href={project.githubLink}
                    target="_blank"
                    style={{ margin: "0 15px" }}
                  >
                    <GitHubIcon sx={{ fontSize: "2.5rem" }} />
                  </IconButton>
                )}
                {project.youtubeLink.length > 0 && (
                  <IconButton
                    color="error"
                    href={project.youtubeLink}
                    target="_blank"
                    style={{ margin: "0 15px" }}
                  >
                    <YouTubeIcon sx={{ fontSize: "2.5rem" }} />
                  </IconButton>
                )}
                {project.deployedLink && (
                  <IconButton
                    color="primary"
                    href={project.deployedLink}
                    target="_blank"
                    style={{ margin: "0 15px" }}
                  >
                    <LinkIcon style={{ fontSize: "2.5rem" }} />
                  </IconButton>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;

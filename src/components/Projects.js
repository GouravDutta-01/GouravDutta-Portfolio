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

const Projects = () => {
  const projects = [
    {
      title: "The-Blog-Cafe",
      description:
        "The-Blog-Cafe is a responsive and user-friendly blog management web app with Material-UI and React.js frontend, Express.js, Node.js, and MongoDB backend, featuring user authentication and CRUD operations.",
      githubLink: "https://github.com/GouravDutta-01/The-Blog-Cafe",
      youtubeLink: "https://www.youtube.com/watch?v=hS_dUY9Wsm8",
      deployedLink: "",
      image: project1Image,
    },
    {
      title: "SafeRoads",
      description:
        "Developed a user-friendly web application with React.js and Material UI and established a Flask server, facilitating seamless integration with the machine learning model for effective user-system communication.",
      githubLink: "https://github.com/sadiqebrahim/SafeRoads",
      youtubeLink: "",
      deployedLink: "",
      image: project2Image,
    },
    {
      title: "Text-Ninja",
      description:
        "This is a responsive text manipulation web app with case conversion, trimming, and first-letter capitalization. It includes clipboard functionality, random text generation, and text analytics for reading time, word count, and character insights. The user-friendly interface allows personalization with six color themes",
      githubLink: "https://github.com/GouravDutta-01/Text-Ninja",
      youtubeLink: "https://www.youtube.com/watch?v=zkN8NtOofBQ",
      deployedLink: "https://gouravdutta-01.github.io/Text-Ninja/",
      image: project3Image,
    },
    {
      title: "Opcode-Converter",
      description:
        "Developed a responsive and user-friendly web application for the Intel 8085 Microprocessor, streamlining opcode retrieval by allowing students to input mnemonics. The intuitive interface enhances efficiency by eliminating the need for manual opcode lookup.",
      githubLink: "https://github.com/GouravDutta-01/Opcode-Converter",
      youtubeLink: "https://www.youtube.com/watch?v=ajE7wJLIU3A",
      deployedLink: "https://gouravdutta-01.github.io/Opcode-Converter/",
      image: project4Image,
    },
    {
      title: "Edit-Ninja",
      description:
        "This is a Flask-based web app utilizing OpenCV for diverse image processing tasks, such as format conversion (JPG, PNG), grayscale conversion, cropping, resizing (350x350 px, 1000x1000 px), rotation, and various blur and filter applications.",
      githubLink: "https://github.com/GouravDutta-01/Edit-Ninja",
      youtubeLink: "https://www.youtube.com/watch?v=zv7emj02o48",
      deployedLink: "",
      image: project5Image,
    },
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

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProjectCard from "./ProjectCard";
import projects from "../../data/Projects";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Projects = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {projects.map((project) => {
        return <ProjectCard project={project} />;
      })}
    </div>
  );
};

export default Projects;

import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../../data/Projects";

import "./projects.css";

const Projects = () => {
  return (
    <div className="ProjectSectionWrapper">
      {projects.map((project) => {
        return <ProjectCard project={project} />;
      })}
    </div>
  );
};

export default Projects;

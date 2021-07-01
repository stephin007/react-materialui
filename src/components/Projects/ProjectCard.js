import React from "react";
import { Button, Paper } from "@material-ui/core";
import { FaFirefoxBrowser, FaGithub } from "react-icons/all";

export default function ProjectCard({ project }) {
  return (
    <>
      <div className="ProjectCard">
        <Paper className="ProjectCardContents">
          <img src={project.imgLink} alt="" className="ProjectCardImage" />
          <div className="ProjectLinks">
            <a href={project.ghLink} style={{ textDecoration: "none" }}>
              <Button
                size="small"
                color="secondary"
                variant="contained"
                className="ProjectCardButton"
              >
                Github
                <FaGithub style={{ fontSize: "20px", marginLeft: "10px" }} />
              </Button>
            </a>
            <a href={project.webLInk} style={{ textDecoration: "none" }}>
              <Button
                size="small"
                color="primary"
                variant="contained"
                className="ProjectCardButton"
              >
                Live{" "}
                <FaFirefoxBrowser
                  style={{ fontSize: "20px", marginLeft: "10px" }}
                />
              </Button>
            </a>
          </div>
        </Paper>
      </div>
    </>
  );
}

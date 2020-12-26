import React from "react";
import data from "../data.json";
import ProjectCard from "./ProjectCard";
import "../css/Projects.scss";

const Projects = () => {
  return (
    <>
      <h1>Projects</h1>
      <div className="cards">
        {data.projects.map((project) => {
          return <ProjectCard {...project} />;
        })}
      </div>
    </>
  );
};

export default Projects;
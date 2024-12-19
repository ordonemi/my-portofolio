import { Link } from "react-router-dom";
import "./ProjectCard.css";
import { FaGithub } from "react-icons/fa";
import Screenshot from "../images/screenshot.webp"

import React from 'react'

const ProjectCard = ({title, date, description, githubLink}) => {
  return (
    <div className="project-container">
      <div className="project-img">
        <img src={Screenshot} alt="project screenshot"/>
      </div>
      <div className="project-info">
        <h1 className="project-title">{title}</h1>
        <h4 className="date">{date}</h4>
        <p className="project-description">{description}</p>
      </div>
      <div className="github">
        <Link to={githubLink} target="_blank"><FaGithub size={20} style={{ color: "white", marginRight: "1rem" }}/>View Source Code</Link>
      </div>
    </div>
  )
}

export default ProjectCard
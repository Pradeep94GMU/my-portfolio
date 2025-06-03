import React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="card">
      <h2>{project.icon} {project.title}</h2>
      <p>{project.description}</p>
      <div className="buttons">
        <a href={project.githubLink} target="_blank" rel="noreferrer">GitHub Code</a>
        <a href={project.demoLink} target="_blank" rel="noreferrer">Live Demo</a>

      </div>
    </div>
  );
}


export default ProjectCard;

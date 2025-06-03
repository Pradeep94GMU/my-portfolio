import React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="card">
      <h2>{project.icon} {project.title}</h2>
      <p>{project.description}</p>
      <div className="buttons">
        <a href={project.demoLink}>Live Demo</a>
        <a href={project.githubLink}>GitHub Code</a>
      </div>
    </div>
  );
}


export default ProjectCard;

import React from 'react';

function ProjectCard({ project }) {
  // const { title, description, stack, demo, github } = p;
  console.log(project);
  return (
    <div className="project__card">
      <h3>{project.title}</h3>
      <p className="project__des">{project.description}</p>
      <p className="project__stack">{project.stack}</p>
      <div className="project__card__links">
        <a href={project.github} target="_blank">
          GitHub
        </a>
        {project.demo !== '' ? (
          <a href={project.demo} target="_blank">
            Live Demo
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default ProjectCard;

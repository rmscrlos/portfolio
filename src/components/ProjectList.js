import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: 'Water My Plants',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, illo?',
    stack: 'HTML | CSS | JS | REACT | NODE.JS | REDUX | STYLED COMPONENTS',
    demo: '#',
    github: '#',
  },
  {
    title: 'Eth ToDo',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, illo?',
    stack: 'HTML | CSS | JS | REACT | WEB3.JS | SOLIDITY ',
    demo: '#',
    github: '#',
  },
  {
    title: 'Done With It',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, illo?',
    stack: 'JS | REACT NATIVE | REACT ',
    demo: '#',
    github: '#',
  },
];

function ProjectList() {
  return (
    <div className="project__card__container">
      {projectsData.map(project => {
        return <ProjectCard project={project} key={project.title} />;
      })}
    </div>
  );
}

export default ProjectList;

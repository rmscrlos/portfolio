import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: 'Water My Plants',
    description:
      'React Application for creating a plant watering schedule tailored to each individual plant.',
    stack: 'HTML | CSS | JS | REACT | NODE.JS | REDUX | STYLED COMPONENTS',
    demo: '',
    github: '#',
  },
  // {
  //   title: 'Eth ToDo',
  //   description:
  //     'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, illo?',
  //   stack: 'HTML | CSS | JS | REACT | WEB3.JS | SOLIDITY ',
  //   demo: '#',
  //   github: '#',
  // },
  {
    title: 'Done With It',
    description:
      'Done With It is a React Native Application that allows users to buy and sell from other users.',
    stack: 'JS | REACT NATIVE | APISAUCE | FORMIK ',
    demo: '',
    github: 'https://github.com/rmscrlos/DoneWithIt',
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

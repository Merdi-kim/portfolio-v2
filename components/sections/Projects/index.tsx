import React from 'react';
import ProjectCard from '../../cards/ProjectCard';
import TitleCard from '../../cards/TitleCard';

const Projects = () => {
  return (
    <div className="flex flex-col items-center">
      <TitleCard text="Projects" />
      <p>Here is where I have fun building</p>
      <div className="projects">
        <ProjectCard />
        <ProjectCard right />
        <ProjectCard />
        <ProjectCard right />
      </div>
    </div>
  );
};

export default Projects;

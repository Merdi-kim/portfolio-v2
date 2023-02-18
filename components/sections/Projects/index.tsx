import React from 'react';
import { projects } from '../../../data';
import ProjectCard from '../../cards/ProjectCard';
import TitleCard from '../../cards/TitleCard';

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col items-center">
      <TitleCard text="Projects" />
      <p>Interesting projects that I have worked on over time</p>
      <div className="projects">
        {projects?.map((project, index) => (
          <ProjectCard
            right={index % 2 == 0 ? false : true}
            project={project}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        <ProjectItem name= "Reciplease" about ="A recipe tracking app" technologies ={['Rails', 'Bootstrap CSS']}/>
        <ProjectItem name= "Kibbles N Bitz" about ="Tinder for dogs" technologies ={['React', 'Redux']}/>
        <ProjectItem name= "Alienwares" about ="Etsy for aliens" technologies ={['React', 'Redux', 'Rails']}/>
      </div>
    </div>
  );
}

export default ProjectList;

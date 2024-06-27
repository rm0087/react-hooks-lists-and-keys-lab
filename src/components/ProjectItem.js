import React from "react";






function ProjectItem({project:{name, about, technologies}}) {
  
 return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        
      </div>
    </div>
  );
}

export default ProjectItem;

// key={technologies.indexOf(technology)}
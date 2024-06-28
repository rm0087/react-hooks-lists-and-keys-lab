import React from "react";

export default function ProjectItem({name, about, technologies}) {
  
 return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologies.map((technology)=>{
          return(
            <span key={technologies.indexOf(technology)}>{technology}</span>
          )
        })}
      </div>
    </div>
  );
}

// key={technologies.indexOf(technology)}
import React from "react";

function NavBar() {
  
  const links = [
    {id: 0, title: "home", page: `#home` }, 
    {id: 1, title: "about", page: `#about` }, 
    {id: 2, title: "projects", page: `#projects`},
  ]; 

  return (
    <nav>
      {links.map(link=>
        <a key={link.id} href={link.page} >{link.title}</a>
      )}
    </nav>
  );
}

export default NavBar;

import {
    onlyPages,
    onlyProjects,
    shuffle,
    filterBySlug,
 
    
  } from "@lekoarts/gatsby-theme-jodie/src/utils/resolver-templates";
  
  
  const modifyGrid = (data) => onlyPages(data);
  
  //const modifyGrid = (data) => onlyProjects(data)

  //const modifyGrid = (data) => shuffle(data);

  //const modifyGrid = (data) => filterBySlug(data, ["/about"]);
  
  export default modifyGrid;

  




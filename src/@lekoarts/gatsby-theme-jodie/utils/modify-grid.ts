import {
  onlyPages,
  onlyProjects,
  shuffle 
} from "@lekoarts/gatsby-theme-jodie/src/utils/resolver-templates";

const modifyGrid = (data) => shuffle(data);
//const modifyGrid = (data) => onlyProjects(data);
//const modifyGrid = (data) => onlyPages(data)

export default modifyGrid;


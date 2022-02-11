
import { IGatsbyImageData } from "gatsby-plugin-image"
import { onlyPages, onlyProjects, shuffle } from "./resolver-templates";



export interface IGridItem {
  slug: string
  title: string
  cover: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
  __typename: "MdxProject" | "MdxPage"
}

function homepageProjectLimit(data: IGridItem[]): IGridItem[] {
  
  return data
}

const modifyGrid = (data) => onlyPages(data);
//const modifyGrid = (data) => onlyProjects(data);





/**
 * Examples:
 *
 * You can import the onlyPages() function to filter out everything but pages:
 *


 * You can also do more sophisticated filtering, like the filterBySlug() function that also takes in a second parameter (an array of slugs)
 * You'll need to pass the data in the second argument:
 *
 * const modifyGrid = (data) => filterBySlug(data, ["/about"])
 */

export default modifyGrid;

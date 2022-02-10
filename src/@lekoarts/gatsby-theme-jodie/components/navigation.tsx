/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { readableColor } from "polished"
import { replaceSlashes } from "../utils/replace-slashes"
import useJodieConfig from "../hooks/use-jodie-config"

import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Navigation = ({ bg }: { bg: string }) => {
  const { navigation, basePath } = useJodieConfig()

  return (
  
    <nav
      aria-label="Primary Navigation"
      sx={{
        a: {
          color: readableColor(bg),
          textDecoration: `none`,
          fontSize: [1, 2, 2, 3],
          marginLeft: [2, 3, 3, 0],
          "&:hover,&:focus": {
            color: readableColor(bg, `primary`, `primaryLight`, false),
          },
        },
        ul: {
          margin: 0,
          padding: 0,
          li: {
            listStyle: `none`,
            display: [`inline-block`, `inline-block`, `inline-block`, `block`],
          },
        },
        variant: `navigation`,
      }}
    >
  
      <ul>
        {navigation.map((navItem) => (
          <li  key={navItem.slug}>


            <Link style={{'backgroundColor':'black', 'color': 'white', 'borderRadius': '3px', 'paddingInline': '3px'}} sx={(t) => ({ ...t.styles?.a })} to={replaceSlashes(`/${basePath}/${navItem.slug}`)}>{(' ')}{navItem.name} </Link>
          </li>
        ))}
      </ul>
      <Link to="https://www.linkedin.com/in/daniel-van-note-004352228/" ><LinkedInIcon sx={{ fontSize: 40 }} > </LinkedInIcon> </Link>
    </nav>
  )
}

export default Navigation

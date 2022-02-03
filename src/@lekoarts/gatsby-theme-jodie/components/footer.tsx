/** @jsx jsx */
import { jsx, Link, useThemeUI, get } from "theme-ui"
import { readableColor } from "polished"
import useSiteMetadata from "../hooks/use-site-metadata"

const Footer = ({ bg }: { bg: string }) => {
  const { siteTitle } = useSiteMetadata()
  const {
    theme: { rawColors },
  } = useThemeUI()

  const text = readableColor(
    bg,
    rawColors!.textMuted as string | undefined,
    rawColors!.textMutedLight as string | undefined
  )

  return (
    <footer
      sx={{
        position: [`relative`, `relative`, `relative`, `fixed`],
        width: (t) => [`100%`, `100%`, `100%`, get(t, `sidebar.normal`), get(t, `sidebar.wide`)],
        bottom: 0,
        color: text,
        fontSize: 0,
        p: [3, 3, 4],
        background: bg,
        a: {
          color: readableColor(bg),
          "&:hover,&:focus": {
            color: readableColor(bg, `primary`, `primaryLight`, false),
          },
        },
        variant: `footer`,
      }}
    >
      <div>
        &copy; {new Date().getFullYear()} by {siteTitle}.
      </div>
      <div>
      Software {` `}by {` `}
        {/* <Link
          aria-label="Link to the theme's GitHub repository"
          href="https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-jodie"
        >by LekoArts
        </Link>
        {` `}
      and
        {` `} */}
        <Link
          aria-label="Link to the theme author's website"
          href="http://marlonbarriosSolano.io"
        >
          Marlon Barrios Solano 
        </Link>
      </div>
    </footer>
  )
}

export default Footer
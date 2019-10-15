/** @jsx jsx */
import { jsx } from "theme-ui"

/** fixed width */
export const ContentSection = ({ children, ...rest }) =>
  <section sx={{
    margin: "auto",
    maxWidth: 960,
  }} {...rest}>
    {children}
  </section>

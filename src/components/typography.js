/** @jsx jsx */
import { jsx } from "theme-ui"

export const Headline = ({ children, ...rest }) =>
  <h1 sx={{
    fontSize: [7, 8],
    color: "text.highContrast",
    textAlign: "center",
    fontWeight: "bold",
    lineHeight: "heading",
  }} {...rest}>
    {children}
  </h1>

export const A = ({ children, ...rest }) =>
  <a sx={{
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  }} {...rest}>
    {children}
  </a>

export const P = ({ children, ...rest }) =>
  <p sx={{
    lineHeight: "body",
  }} {...rest}>
    {children}
  </p>

export const H3 = ({ children, ...rest}) =>
  <h3 sx={{
    fontSize: 4,
    lineHeight: "heading",
    fontWeight: "bold",
  }} {...rest}>
    {children}
  </h3>
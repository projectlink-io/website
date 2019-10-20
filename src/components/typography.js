/** @jsx jsx */
import { jsx } from "theme-ui"

export const Headline = ({ children, ...rest }) =>
  <h1 sx={{
    fontSize: [7, 8],
    color: "text.highContrast",
    textAlign: "center",
    fontWeight: "bold",
    lineHeight: "heading",
    marginTop: 5,
    marginBottom: 3,
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

export const Lead = ({ children, ...rest }) =>
  <p sx={{
    fontSize: [3, 4],
    lineHeight: "heading",
    fontWeight: "bold",
  }} {...rest}>
    {children}
  </p>

export const H3 = ({ children, ...rest}) =>
  <h3 sx={{
    fontSize: [4, 5],
    lineHeight: "heading",
    fontWeight: "bold",
  }} {...rest}>
    {children}
  </h3>

export const H2 = ({ children, ...rest}) =>
  <h3 sx={{
    fontSize: [5, 6],
    lineHeight: "heading",
    fontWeight: "bold",
  }} {...rest}>
    {children}
  </h3>
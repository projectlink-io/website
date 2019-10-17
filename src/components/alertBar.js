/** @jsx jsx */
import { jsx } from "theme-ui"
import { A } from "./typography";

export default props =>
  <div sx={{
    height: 4,
    background: "black",
    display: "grid",
    alignItems: "center",
  }} {...props}>
    <p sx={{
      margin: 0,
      textAlign: "center",
      fontSize: 1,
      color: "text.negative.primary",
      }}>Accepting requests for beta access ・ <A sx={{color: "text.negative.highContrast"}} href="#">Learn more →</A></p>
  </div>

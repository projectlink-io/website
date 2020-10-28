/** @jsx jsx */
import { jsx } from "theme-ui"
import { A } from "./typography";

export default ({ setModalOpen, ...rest }) =>
  <div sx={{
    height: 4,
    background: "black",
    display: "grid",
    alignItems: "center",
  }} {...rest}>
    <p sx={{
      margin: 0,
      textAlign: "center",
      fontSize: 1,
      color: "text.negative.primary",
    }}>Accepting requests for beta access ・ <A sx={{ color: "text.negative.highContrast" }} href="/beta-program">Learn more →</A></p>
  </div>

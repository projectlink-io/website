/** @jsx jsx */
import { jsx } from "theme-ui"

function StyledBackground(props) {
  return (
    <div sx={{
      minHeight: "100vh",
      paddingTop: "19px",
      paddingBottom: [2, 6],
      backgroundImage: "radial-gradient(circle, #D7D7D7, #D7D7D7 1px, #FFF 1px, #FFF)",
      backgroundPosition: "0 0",
      backgroundSize: "32px 32px",
      position: "relative",
      "&:before": {
        content: `""`,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        position: "absolute",
        background: "linear-gradient(rgba(0,0,0,0) 66%, #fff)",
        zIndex: -1,
      },
    }}
      {...props}
    />
  )
}

export default StyledBackground
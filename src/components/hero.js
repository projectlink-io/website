/** @jsx jsx */
import { jsx } from "theme-ui"
import logo from "../images/projectlink-logo-color.png"
import SignUpForm from "./form";
import { ContentSection } from "./grid";
import { Headline, P, Lead } from "./typography";
import HeroImage from "./heroImage";
import StyledBackground from "./styledBackground";

const Hero = () =>
  <StyledBackground>
    <ContentSection>
      <img
        sx={{
          paddingLeft: 4,
          maxHeight: 8 * 3,
        }}
        src={logo}
        alt="projectlink logo"
      />

      <Headline sx={{
        "@keyframes example": {
          from: {
            transform: "translateY(-16px)",
            opacity: 0,
          },
          to: {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
        animation: "1s ease-out example"
      }}>Projectlink connects<br /><span sx={{ color: "highlight" }}>projects, buildings, and suppliers</span></Headline>
      <P sx={{ textAlign: "center", fontWeight: "bold", marginTop: 0 }}>
        Networking software<br /><span sx={{ color: "text.lowContrast", fontWeight: "light" }}>for industry leaders.</span>
      </P>

      <div sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        paddingTop: 5,
      }}>
        <div sx={{
          width: ["100%", "50%"],
          padding: 4,
        }}>
          <HeroImage />
        </div>
        <div sx={{
          width: ["100%", "50%"],
          padding: 4,
          zIndex: 1,
          alignSelf: "center",
        }}>
          <Lead sx={{ marginTop: 0 }}>
            Start free. <span sx={{ color: "text.lowContrast", fontWeight: "light" }}>No credit card required</span>
          </Lead>
          <Lead>
            Secure. <span sx={{ color: "text.lowContrast", fontWeight: "light" }}>100% secure infrastructure</span>
          </Lead>
          <Lead>
            Private. <span sx={{ color: "text.lowContrast", fontWeight: "light" }}>You always own your data</span>
          </Lead>
          <SignUpForm />
        </div>
      </div>

    </ContentSection>
  </StyledBackground>;

export default Hero
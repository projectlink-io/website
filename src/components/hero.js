/** @jsx jsx */
import { jsx } from "theme-ui"
import logo from "../images/projectlink-logo-color.png"
import SignUpForm from "./form";
import { ContentSection } from "./grid";
import { Headline, P, H3, Lead } from "./typography";
import HeroImage from "./heroImage";

const Hero = () =>
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
        zIndex: 0,
      },
    }} >
      <ContentSection>
        <img
          sx={{
            paddingLeft: 4,
            maxHeight: 8*3,
          }}
          src={logo} alt="projectlink logo" />

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
        }}>The easiest way<br/><span sx={{color: "highlight"}}>to close deals</span></Headline>
        <P sx={{textAlign: "center", fontWeight: "bold", marginTop: 0}}>
          Projectlink is networking software<br/><span sx={{color: "text.lowContrast", fontWeight: "light"}}>for industry leaders.</span>
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
            <Lead sx={{marginTop: 0}}>
              Start free. <span sx={{color: "text.lowContrast", fontWeight: "light"}}>No credit card required</span>
            </Lead>
            <Lead>
              Secure. <span sx={{color: "text.lowContrast", fontWeight: "light"}}>100% secure infrastructure</span>
            </Lead>
            <Lead>
              Private. <span sx={{color: "text.lowContrast", fontWeight: "light"}}>You always own your data</span>
            </Lead>
            <SignUpForm />
          </div>
        </div>

      </ContentSection>
    </div>;

export default Hero
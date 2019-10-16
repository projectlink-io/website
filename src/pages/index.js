/** @jsx jsx */
import { jsx } from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Headline, H3, P, H2 } from "../components/typography"
import { ContentSection } from "../components/grid"
import Hero from "../components/heroImage"
import SignUpForm from "../components/form"
import AlertBar from "../components/alertBar"
import ProjectImage01 from "../components/projectImage01"
import ProjectImage02 from "../components/projectImage02"
import ProjectImage03 from "../components/projectImage03"
import { useScrollTriggers } from "../hooks"


const IndexPage = () => {
  const scrollTriggers = useScrollTriggers(["#project01", "#project02", "#project03"]);

  return (
    <Layout>
      <SEO title="Home" />
      <AlertBar />

      <div sx={{
        minHeight: "100vh",
        padding: [1, 5],
        paddingBottom: [2, 7],
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
          <P sx={{textAlign: "center", fontWeight: "bold"}}>
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
              padding: [4, 3],
            }}>
              <Hero />
            </div>
            <div sx={{
              width: ["100%", "50%"],
              padding: [4, 3],
              zIndex: 1,
              alignSelf: "center",
            }}>
              <H3>
                Start free. <span sx={{color: "text.lowContrast", fontWeight: "light"}}>No credit card required</span>
              </H3>
              <H3>
                Secure. <span sx={{color: "text.lowContrast", fontWeight: "light"}}>100% secure infrastructure</span>
              </H3>
              <H3>
                Private. <span sx={{color: "text.lowContrast", fontWeight: "light"}}>You always own your data</span>
              </H3>
              <SignUpForm />
            </div>
          </div>

        </ContentSection>
      </div>

      <div sx={{
        backgroundColor: "background.beige",
        borderTop: "1px solid #F2F4F5",
      }}>
        <ContentSection>
          <div sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}>
            <div sx={{
              width: ["100%", "50%"],
              padding: [4, 5],
              paddingRight: [4, 6],
              alignSelf: "center",
            }}>
              <H2 sx={{ marginTop: 0 }}>
                Find projects in your market
              </H2>
              <P>
                Projectlink saves you time and money <span sx={{color: "text.lowContrast"}}>by only showing you projects that are relevant to you.</span>
              </P>
            </div>
            <div sx={{
              display: ["none", "block"],
              width: ["100%", "50%"],
              alignSelf: "center",
              position: "relative",
            }}>
              <ProjectImage01 id="project01" sx={{
                "@keyframes slideIn": {
                  from: {
                    transform: "translateY(80px)",
                    opacity: 0,
                  },
                  to: {
                    transform: "translateY(0)",
                    opacity: 1,
                  },
                },
                position: "absolute",
                marginTop: "-128px",
                marginBottom: "16px",
                borderRadius: "7px",
                boxShadow: "0 1px 2px rgba(60,64,67, 0.3), 0 1px 3px 1px rgba(60,64,67, 0.15)",
                transition: "box-shadow .3s",
                "&:hover": {
                  transition: "box-shadow .3s",
                  boxShadow: "rgba(60,64,67,0.3) 0px 0px 20px, rgba(60,64,67,0.15) 0px 0px 14px 0px",
                },
                animation: scrollTriggers.some(t => "project01") ? "1s ease-out slideIn" : "",
              }}/>
              <ProjectImage02 id="project02" sx={{
                position: "absolute",
                marginBottom: "16px",
                borderRadius: "7px",
                boxShadow: "0 1px 2px rgba(60,64,67, 0.3), 0 1px 3px 1px rgba(60,64,67, 0.15)",
                transition: "box-shadow .3s",
                "&:hover": {
                  transition: "box-shadow .3s",
                  boxShadow: "rgba(60,64,67,0.3) 0px 0px 20px, rgba(60,64,67,0.15) 0px 0px 14px 0px",
                },
                animation: scrollTriggers.some(t => "project02") ? "1s ease-out 0.3s slideIn" : "",
              }}/>
              <ProjectImage03 id="project03" sx={{
                position: "absolute",
                marginBottom: "-128px",
                borderRadius: "7px",
                boxShadow: "0 1px 2px rgba(60,64,67, 0.3), 0 1px 3px 1px rgba(60,64,67, 0.15)",
                transition: "box-shadow .3s",
                "&:hover": {
                  transition: "box-shadow .3s",
                  boxShadow: "rgba(60,64,67,0.3) 0px 0px 20px, rgba(60,64,67,0.15) 0px 0px 14px 0px",
                },
                animation: scrollTriggers.some(t => "project03") ? "1s ease-out 0.6s slideIn" : "",
              }}/>
            </div>
          </div>
        </ContentSection>
      </div>

      <div sx={{
        padding: 6,
        background: "black",
      }}>
        <ContentSection>
        </ContentSection>
      </div>

    </Layout>
  );
}

export default IndexPage

/** @jsx jsx */
import { jsx } from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { P, H2, H3 } from "../components/typography"
import { ContentSection } from "../components/grid"
import Hero from "../components/hero"
import AlertBar from "../components/alertBar"
import NewProjectImage01 from "../components/newProjectImage01"
import NewProjectImage02 from "../components/newProjectImage02"
import Projects from "../components/projects"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <AlertBar />
      <Hero />

      <div sx={{
        backgroundColor: "background.beige",
        borderTop: "1px solid #e8e8e8",
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
              <P>Manufacturers</P>
              <H3>
                Find projects in your market
              </H3>
              <P>
                We intelligently filter projects so you see only the most relevant.
              </P>
            </div>
            <div sx={{
              display: ["none", "block"],
              paddingLeft: 4,
              width: "50%",
              alignSelf: "center",
            }}>
              <Projects />
            </div>
          </div>
        </ContentSection>
      </div>

      <div sx={{
        background: "black",
      }}>
        <ContentSection>

          <div sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}>

            <div sx={{
              width: ["100%", "50%"],
              alignSelf: "center",
              padding: [4, 5],
              paddingRight: [4, 6],
            }}>
              <P sx={{
                color: "text.negative.primary"
              }}>Product managers</P>
              <H3 sx={{
                color: "text.negative.primary"
              }}>
                Find the best suppliers for your projects
              </H3>
              <P>
              </P>
            </div>

            <div sx={{
              display: ["none", "block"],
              width: ["100%", "50%"],
            }} />

            <div sx={{
              width: "100%",
              display: ["none", "block"],
              paddingTop: 6,
              paddingBottom: 4,
              textAlign: "center",
            }}>
              <H2 sx={{
                color: "text.negative.primary",
              }}>
                Create projects and connect with clients.
              </H2>
            </div>

            <div sx={{
              width: ["100%", "50%"],
              padding: 4,
              marginBottom: "-256px",
            }}>
              <NewProjectImage01 sx={{
                borderRadius: 7,
                boxShadow: "0px 0px 31px rgba(0, 0, 0, 0.16), 0px 0px 4px rgba(0, 0, 0, 0.08);",
              }} /> 
            </div>

            <div sx={{
              width: ["100%", "50%"],
              display: ["none", "block"],
              padding: 4,
              marginBottom: "-256px",
            }}>
              <NewProjectImage02 sx={{
                borderRadius: 7,
                boxShadow: "0px 0px 31px rgba(0, 0, 0, 0.16), 0px 0px 4px rgba(0, 0, 0, 0.08);",
              }}/> 
            </div>

          </div>

        </ContentSection>
      </div>
      <div>
        <ContentSection>
          <div sx={{
            width: ["100%", "50%"],
            alignSelf: "center",
            padding: [4, 5],
            paddingRight: [4, 6],
            marginTop: "256px",
          }}>
            <H3 sx={{
            }}>
              Keep track of conversations
            </H3>
            <P>
              A low barrier to communication<br/>means deals happen fast.
            </P>
          </div>

          <div sx={{
            display: ["none", "block"],
            width: ["100%", "50%"],
          }} />
        </ContentSection>
      </div>
    </Layout>
  );
}

export default IndexPage

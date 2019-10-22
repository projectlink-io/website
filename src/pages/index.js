/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { P, H2, H3 } from "../components/typography"
import { ContentSection, FlexRow } from "../components/grid"
import Hero from "../components/hero"
import AlertBar from "../components/alertBar"
import NewProjectImage01 from "../components/newProjectImage01"
import NewProjectImage02 from "../components/newProjectImage02"
import Projects from "../components/projects"
import Chats from "../components/chats"
import Modal from "../components/modal"
import Notifications from "../components/notifications"

const IndexPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Layout setModalOpen={setModalOpen}>
      <SEO title="Home" />
      <AlertBar setModalOpen={setModalOpen} />
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
              paddingTop: 4,
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
          <FlexRow>
            <div sx={{
              width: ["100%", "50%"],
              alignSelf: "center",
              padding: [4, 5],
              paddingRight: [4, 6],
              marginTop: "256px",
            }}>
              <H3 sx={{
                display: ["block", "none"],
              }}>
                Easy, fast, secure
              </H3>
              <P sx={{
                display: ["block", "none"],
              }}>
                Projectlink uses modern horizontally-scaling real-time
                database technology, so your data is always safe, up to date, and accessible in
                the blink of an eye.
              </P>
              <H3 sx={{
                display: ["none", "block"],
                marginTop: 0,
              }}>
                Keep track of conversations
              </H3>
              <P sx={{
                display: ["none", "block"],
              }}>
                In-app chat means a low barrier to communication so deals happen fast.
              </P>
            </div>

            <div sx={{
              display: ["none", "block"],
              width: ["100%", "50%"],
              marginTop: "256px",
              paddingTop: 4,
            }}>
              <Chats />
            </div>
          </FlexRow>
        </ContentSection>
      </div>
      <div sx={{
        backgroundColor: "background.beige",
        borderTop: "1px solid #e8e8e8",
        display: ["none", "block"],
      }}>
        <ContentSection>
          <FlexRow>
            <div sx={{
              width: ["100%", "50%"],
              display: "flex",
              flexDirection: "column",
              marginTop: 3,
            }}>
              <Notifications />
            </div>
            <div sx={{
              width: ["100%", "50%"],
              alignSelf: "center",
              padding: [4, 5],
              paddingRight: [4, 6],
            }}>
              <H3 sx={{
              }}>
                Get notified with opportunities
              </H3>
              <P>
                Subscribe to notification channels and keep your finger on the pulse
              </P>
            </div>
          </FlexRow>
        </ContentSection>
      </div>
      {
        modalOpen && <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      }
    </Layout>
  );
}

export default IndexPage

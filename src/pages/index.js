/** @jsx jsx */
import { jsx } from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Headline, A, H3, P } from "../components/typography"
import { ContentSection } from "../components/grid"
import Hero from "../components/heroImage"
import SignUpForm from "../components/form"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div sx={{
      height: 4,
      background: "black",
      display: "grid",
      alignItems: "center",
    }}>
      <p sx={{
        margin: 0,
        textAlign: "center",
        fontSize: 1,
        color: "text.negative.primary",
        }}>Accepting requests for beta access ・ <A sx={{color: "text.negative.highContrast"}} href="#">Learn more →</A></p>
    </div>

    <div sx={{
      minHeight: "100vh",
      padding: [1, 5],
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

        <Headline>The easiest way<br/><span sx={{color: "highlight"}}>to close deals</span></Headline>
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

  </Layout>
)

export default IndexPage

/** @jsx jsx */
import { jsx } from "theme-ui"
import logo from "../images/projectlink-logo-color.png"
import Layout from '../components/layout'
import StyledBackground from '../components/styledBackground'
import FactoryImage from '../components/factoryImage'
import { H3, Lead, P } from '../components/typography'
import SignUpForm from "../components/form"

const BetaProgram = props => {
  return (
    <Layout>
      <StyledBackground>
        <div
          sx={{
            marginX: 'auto',
            paddingX: 16,
            maxWidth: '720px',
            zIndex: 9999,
          }}
        >
          <img
            sx={{
              paddingLeft: 0,
              mb: 4,
              maxHeight: 8 * 3,
            }}
            src={logo}
            alt="projectlink logo"
          />
          <FactoryImage />
          <h1 sx={{ fontSize: '48px' }}>
            Projectlink beta program
          </h1>
          <H3 sx={{ color: 'text.lowContrast', fontWeight: 'normal' }}>
            We're rolling out a closed beta program to make sure Projectlink does what you need it do to.
          </H3>
          <P sx={{ fontSize: '20px', marginBottom: 5 }}>
            You play an important role in developing Projectlink. We’ll launch as a closed beta, offering the service to a small group of organizations. This allows us to listen closely to your feedback, and adapt the software to your needs. The beta program offers early adoption to the platform for free, there’s no commitment or expectation from you.
            <br />
            <br />• Be the first to try the platform
            <br />• If you think it could be useful, let us know
            <br />• If you would like to see things different, let us know
          </P>
          <div sx={{
            // width: ["100%", "50%"],
            // padding: 4,
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
            <SignUpForm initialMessage="Sign up to be part of the beta program. We will never send you spam" />
          </div>
        </div>
      </StyledBackground>
    </Layout>
  )
}

export default BetaProgram
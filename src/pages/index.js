import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SignUpForm from "../components/SignUpForm"
import SEO from "../components/seo"
import GlobalStyles from "../components/GlobalStyles";
import { H1, P } from "../components/Typography";
import logo from "../images/projectlink-logo.png"
import screenshot from "../images/plss.png"

const DotGridBackground = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  background-image: radial-gradient(circle, #c1c1c1, #c1c1c1 1px, #fff 1px, #fff);
  background-size: 32px 32px;
`

const Half = styled.div`
  width: 100%;
  margin: auto;
  padding-left: 1rem;
  @media only screen and (min-width: 768px) {
    width: 50%;
  }
`

const Left = styled(Half)`
  max-width: 40rem;
  @media only screen and (min-width: 768px) {
    padding-left: 4rem;
  }
  @media only screen and (min-width: 1024px) {
    padding-left: 12rem;
  }
`

const Right = styled(Half)`
  display: none;
  margin: auto;
  @media only screen and (min-width: 768px) {
    display: block;
    margin-left: 0;
  }
`

const StyledLogo = styled.img`
  max-width: 232px;
`

const StyledScreenshot = styled.img`
  max-width: 520px;
`

const StyledH1 = styled(H1)`
  margin: 5rem 0 5rem 0;
`

const IndexPage = () => (
  <Layout>
    <GlobalStyles />
    <SEO title="Home" />
    <DotGridBackground>
      <Left>
        <StyledLogo src={logo} alt="projectlink logo" />
        <StyledH1>
          The best way to close deals
        </StyledH1>
        <P>
          Projectlink is the next generation of enterprise software for buyers and sellers of industrial equipment.
        </P>
        <SignUpForm />
      </Left>
      <Right>
        <StyledScreenshot src={screenshot} alt="projectlink screenshot" />
      </Right>
    </DotGridBackground>
  </Layout>
)

export default IndexPage

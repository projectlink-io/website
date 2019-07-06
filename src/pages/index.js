import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GlobalStyles from "../components/GlobalStyles";
import logo from "../images/projectlink-logo.png"

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
  @media only screen and (min-width: 768px) {
    padding-left: 4rem;
  }
  @media only screen and (min-width: 1024px) {
    padding-left: 12rem;
  }
`

const Right = styled(Half)`
  margin: auto;
  @media only screen and (min-width: 768px) {
    margin-left: 0;
  }
`

const StyledLogo = styled.img`
  max-width: 250px;
`

const IndexPage = () => (
  <Layout>
    <GlobalStyles />
    <SEO title="Home" />
    <DotGridBackground>
      <Left>
        <StyledLogo src={logo} alt="projectlink logo" />
        <h1>
          The best way to close deals
        </h1>
        <p>
          Projectlink is the next generation of enterprise software for buyers and sellers of industrial equipment.
        </p>
        {/* <SignUpForm /> */}
      </Left>
      <Right>
        <h1>
          Right column
        </h1>
        {/* <Screenshots /> */}
      </Right>
    </DotGridBackground>
  </Layout>
)

export default IndexPage

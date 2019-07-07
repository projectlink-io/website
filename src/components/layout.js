/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import { P } from "../components/Typography"

const StyledFooter = styled.footer`
  background: black;
  color: #ccc;
  padding: 2rem 0 2rem 6rem;
`

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <main>{children}</main>
      <StyledFooter>
        <P>Coming 2020</P>
        <P><small>© Projectlink {new Date().getFullYear()}, Projectlink Agency inc.</small></P>
      </StyledFooter>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

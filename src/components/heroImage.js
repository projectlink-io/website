import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "projectlink-company.png" }) {
        childImageSharp {
          fluid(maxWidth: 480) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img style={{
    borderRadius: "7px",
    boxShadow: "0 3px 50px 0 rgba(0,0,0,0.14)",
  }} fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default Hero

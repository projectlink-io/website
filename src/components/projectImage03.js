import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ProjectImage03 = props => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "projectlink-project03.png" }) {
        childImageSharp {
          fluid(maxWidth: 480) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <div {...props}><Img fluid={data.placeholderImage.childImageSharp.fluid} /></div>
}

export default ProjectImage03
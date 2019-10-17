import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ProjectImage04 = ({id, ...rest}) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "projectlink-project04.png" }) {
        childImageSharp {
          fluid(maxWidth: 480) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <div id={id}><Img fluid={data.placeholderImage.childImageSharp.fluid} {...rest}/></div>
}

export default ProjectImage04
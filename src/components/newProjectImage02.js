import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const NewProjectImage02 = ({id, ...rest}) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "projectlink-newproject02.png" }) {
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

export default NewProjectImage02
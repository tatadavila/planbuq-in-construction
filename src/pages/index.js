import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query Images {
      image: file(relativePath: { eq: "proximamente.png" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1000, fit: FILL) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <>
      <Img
        style={{ height: '100vh', width: '100%' }}
        imgStyle={{ objectFit: 'fill' }}
        fluid={data.image.childImageSharp.fluid}
        srcSet="/static/24ccf8777fa401c26b8187a39f7d69c9/d91cb/proximamente.png 200w,\n/static/24ccf8777fa401c26b8187a39f7d69c9/4fb9c/proximamente.png 400w,\n/static/24ccf8777fa401c26b8187a39f7d69c9/948f0/proximamente.png 800w,\n/static/24ccf8777fa401c26b8187a39f7d69c9/eeb63/proximamente.png 1200w,\n/static/24ccf8777fa401c26b8187a39f7d69c9/13caf/proximamente.png 1600w,\n/static/24ccf8777fa401c26b8187a39f7d69c9/9d222/proximamente.png 1680w"
      />
    </>
  )
}

export default IndexPage

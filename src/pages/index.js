import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              featuredImage {
                publicURL
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>{data.site.siteMetadata.title}</h1>
      <p>A diverse menu of three recipes.</p>

      <li>
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
            <li>
              <Link to={`/recipes/${edge.node.fields.slug}`}>
                <img src={edge.node.frontmatter.featuredImage.publicURL} alt={edge.node.frontmatter.title}></img>
                <h3>{edge.node.frontmatter.title}</h3>
              </Link>
            </li>
        )
        })}
      </li>
    </Layout>
  )
}


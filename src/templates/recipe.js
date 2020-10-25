import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export const query = graphql`
    query (
        $slug: String! 
    ){
        markdownRemark (
        fields: {
            slug: {
            eq: $slug
            }
        }
        ) {
            frontmatter {
                title
            }
            html
        }
    }
`

const Recipe = (props) => {
    return (
        <Layout>
            <span>-parent page here- {props.data.markdownRemark.frontmatter.title}</span>

            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} class="container--narrow">
            </div>
        </Layout>
    )
}

export default Recipe
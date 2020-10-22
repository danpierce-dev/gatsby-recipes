import React from "react"
import footerStyles from "./footer.module.css"
import { Link, graphql, useStaticQuery } from "gatsby"

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `) 

    return (
        <footer>
            <div class="container--narrow">
                <div class="flex-container">
                    <div>Site by <a href="https://www.linkedin.com/in/deepeedev/" target="_blank" rel="noreferrer">{data.site.siteMetadata.author}</a> &copy; 2020</div>
                    <nav class={footerStyles.nav}>
                        <ul class={footerStyles.inlineList}>
                            <li class={footerStyles.inlineItem}><Link to="">test</Link></li>
                            <li class={footerStyles.inlineItem}><Link to="">test2</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer
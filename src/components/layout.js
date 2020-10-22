import React from "react"
import "../styles/styles.css"
import Header from "./header"
import Footer from "./footer"

const Layout = (props) => {
    return (
        <div>
            <Header />

            <main>
                <div class="container">
                    {props.children}
                </div>
            </main>
            
            <Footer />
        </div>
    )
}

export default Layout
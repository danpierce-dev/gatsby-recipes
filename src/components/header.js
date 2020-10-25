import React from "react"
import { Link } from "gatsby"
import Nav from "../components/nav"
import headerStyles from "./header.module.css"

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.container}>
                <Link to="/">deepee recipes</Link>

                <button class="menu-open">Menu</button>
                <Nav />
            </div>
        </header>
    )
}

export default Header
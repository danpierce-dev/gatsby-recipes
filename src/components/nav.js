import React from "react"
import navStyles from "./nav.module.css"
import { Link } from "gatsby"

const Nav = () => {
    return (
        <nav class={navStyles.nav}>
            <ul>
                <li class="nav-item"><Link to="/breakfast">Breakfast Recipes</Link></li>
            </ul>
        </nav>
    )
}

export default Nav
import React from "react"
import Nav from "../components/nav"
import headerStyles from "./header.module.css"

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.container}>
                <div>deepee recipes</div>

                <button class="menu-open">Menu</button>
                <Nav />
            </div>
        </header>
    )
}

export default Header
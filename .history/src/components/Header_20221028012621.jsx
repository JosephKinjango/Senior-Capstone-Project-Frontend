import React from 'react'
import Logo from './images/ttu-logo.png'

const Header = () => {
    return (
        <header>
            <img id="logo" src={Logo} />
            <a href="https://www.youtube.com/results?search_query=sign+in+dialog+box+react+js" id="sign-in">Sign-In <i className="fa-solid fa-chevron-right"></i></a>
        </header>
    )
}

export default Header
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [sidebar, setSidebar] = useState(false)
    return (
        <div className="navbar">
            <img src="../img/Frame.svg" alt="page logo" className="logo"/>
            <ul className="list" style={sidebar !== false ? {height: '100vh', left: 0} : {left: '-100%', overflow: 'hidden'}}>
                <li>
                    <Link to="">About us</Link>
                </li>
                <li>
                    <Link to="">Pricing plan</Link>
                </li>
                <li>
                    <Link to="">Blog</Link>
                </li>
                <li>
                    <Link to="">FAQs</Link>
                </li>
                <li>
                    <Link to="">Contact us</Link>
                </li>
                <div className="btns">
                <a href="" className="signin">Sign in</a>
                <a href="" className="started">Get started</a>
            </div>
            </ul>
            <ul className="lists" style={sidebar !== false ? {height: '20vh', top: '70px'} : {top: '-200px', overflow: 'hidden'}}>
                <li>
                    <Link to="">About us</Link>
                </li>
                <li>
                    <Link to="">Pricing plan</Link>
                </li>
                <li>
                    <Link to="">Blog</Link>
                </li>
                <li>
                    <Link to="">FAQs</Link>
                </li>
                <li>
                    <Link to="">Contact us</Link>
                </li>
                <div className="btns">
                <a href="" className="signin">Sign in</a>
                <a href="" className="started">Get started</a>
            </div>
            </ul>
            <div className="buttons">
                <a href="" className="sign-in">Sign in</a>
                <a href="" className="start">Get started</a>
            </div>
            <img onClick={() => setSidebar(!sidebar)} src="./img/sandwich (1).svg" alt="hamburger opener image" className="menu"/>
            <img onClick={() => setSidebar(!sidebar)} src="./img/sandwich (1).svg" alt="hamburger opener image" className="menus"/>
        </div>
    )
}

export default Navbar

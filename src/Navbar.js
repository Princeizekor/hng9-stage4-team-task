import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="navbar">
            <img src="../img/Frame.svg" alt="page logo" className="logo"/>
            <ul className="list">
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
            </ul>
            <div className="buttons">
                <a href="" className="sign-in">Sign in</a>
                <a href="" className="start">Get started</a>
            </div>
        </div>
    )
}

export default Navbar

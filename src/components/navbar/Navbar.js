import React, { useState } from 'react';
import { Link } from "react-scroll";
import Logo from '../../web-assets/images/logo_nav.svg';
import './Navbar.scss';

export default function Navbar() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    return (
        <nav id="navbar">
            <div className="navbar-container">
                <div className="menu-logo">
                    <a href="/">
                        <img src={ Logo } alt="Logo" className="logo" />
                    </a>
                </div>
                <ul className="main-menu">
                    <li key="header" className="menu-item">
                        <Link activeClass="active" className="menu-link" to="header" spy={true} smooth={true} offset={0} duration={500}>Home</Link>
                    </li>
                    <li key="features" className="menu-item">
                        <Link activeClass="active" className="menu-link" to="features" spy={true} smooth={true} offset={0} duration={500}>Features</Link>
                    </li>
                    <li key="roadmap" className="menu-item">
                        <Link activeClass="active" className="menu-link" to="roadmap" spy={true} smooth={true} offset={0} duration={500}>Roadmap</Link>
                    </li>
                    <li key="team" className="menu-item">
                        <Link activeClass="active" className="menu-link" to="team" spy={true} smooth={true} offset={0} duration={500}>Team</Link>
                    </li>
                    <li key="faq" className="menu-item">
                        <Link activeClass="active" className="menu-link" to="faq" spy={true} smooth={true} offset={0} duration={500}>FAQ</Link>
                    </li>
                    <li key="discord" className="menu-item">
                        <a href="#discord" target="_blank" className="menu-button">Discord</a>
                    </li>
                </ul>
                <ul className="responsive-menu">
                    <Link to={"#"} onClick={ showSidebar } className="responsive-menu-hamburger-wrapper">
                        <svg className="responsive-menu-hamburger-icon-image" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M13 18h7M4 6h16H4Zm0 6h16H4Z" /></svg>
                    </Link>
                    <div className={"responsive-sidebar " + (sidebar ? 'show' : '')} onClick={ showSidebar }>
                        <div className="responsive-overlay" />
                        <div className="responsive-sidebar-wrapper">
                            <div className="menu-logo">
                                <a href="/">
                                    <img src={ Logo } alt="Logo" className="logo" />
                                </a>
                            </div>
                            <li key="header" className="responsive-menu-item">
                                <Link activeClass="active" className="responsive-menu-link" to="header" spy={true} smooth={true} offset={0} duration={500}>Home</Link>
                            </li>
                            <li key="features" className="responsive-menu-item">
                                <Link activeClass="active" className="responsive-menu-link" to="features" spy={true} smooth={true} offset={0} duration={500}>Features</Link>
                            </li>
                            <li key="roadmap" className="responsive-menu-item">
                                <Link activeClass="active" className="responsive-menu-link" to="roadmap" spy={true} smooth={true} offset={0} duration={500}>Roadmap</Link>
                            </li>
                            <li key="team" className="responsive-menu-item">
                                <Link activeClass="active" className="responsive-menu-link" to="team" spy={true} smooth={true} offset={0} duration={500}>Team</Link>
                            </li>
                            <li key="faq" className="responsive-menu-item">
                                <Link activeClass="active" className="responsive-menu-link" to="faq" spy={true} smooth={true} offset={0} duration={500}>FAQ</Link>
                            </li>
                            <li key="discord" className="responsive-menu-item">
                                <a href="#discord" target="_blank" className="responsive-menu-button">Discord</a>
                            </li>
                        </div>
                    </div>
                </ul>
            </div>
        </nav>
    )
}
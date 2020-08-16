import React, { useState, useEffect, useRef } from "react"
import { useStaticQuery,graphql } from "gatsby"
import Img from "gatsby-image"
import { navigate } from '@reach/router';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll'

import "./style.scss";

export const TopNav = ({ links }) => {

    const [navBackground, setNavBackground] = useState(false)
        const navRef = useRef()
        navRef.current = navBackground
        useEffect(() => {
            const handleScroll = () => {
                const show = window.scrollY > 670
                if (navRef.current !== show) {
                    setNavBackground(show)
                }
            }
            document.addEventListener('scroll', handleScroll)
            return () => {
                document.removeEventListener('scroll', handleScroll)
            }
        }, [])

    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { regex: "/logo-white.png/" }) {
                childImageSharp {
                    fixed(width: 125, height: 125) {
                    ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)

    if(!Array.isArray(links)) return <p>Missing props.links</p>;
    //[
        // Example of new window
        // {label: "Jobs", to:"#link", target="_blank"},
        
        // Example of same page scroll
        // {label: "Jobs", to:"#jobs", target:"_blank"},
        // {label: "Career Paths", to:"#career"},
        // {label: "Coaching", to:"#coaching"},
        // {label: "Resources", to:"#events"},
        
        // Example of different page
        //{label: "Terms and conditions", to:"/terms"},
        
        
        // Example of using a component
        //{label: "Terms and conditions", component: () => <Link>click me</Link>},
    //]

    return (
        <header className="main-nav fixed-top" style={{ transition: '1s ease', backgroundColor: navBackground ? 'white' : 'transparent'}}>
            <div className="header-topbar text-center py-3">Give your job search a home with CareerScore</div>
            <Navbar bg="transparent" sticky="top" variant="dark" expand="lg" className="px-5">
                <Navbar.Brand href="#home">
                    <Img fixed={data.file.childImageSharp.fixed} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        {links.map((item, i)=> {
                            const Component = item.component;
                            return (Component !== undefined) ?
                                <Component key={i} className="ml-5 nav-link" />
                            :(item.to.charAt(0) === "#") ?
                                <Link key={i} activeClass="active" className="ml-5 nav-link" to={item.to.substring(1)} spy={true} smooth={true} duration={500} >
                                    {item.label}
                                </Link>
                                : item.target !== "_blank" ?
                                    <Nav.Link 
                                        className="ml-5"
                                        onClick={() => navigate(item.url)}
                                        key={i}>
                                        {item.label}
                                    </Nav.Link>
                                    :
                                    <a key={i}
                                        className="ml-5 nav-link"
                                        href={item.to}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        key={i}
                                    >
                                        {item.label}
                                    </a>
                        })}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}
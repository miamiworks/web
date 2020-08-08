import React from "react"
import { useStaticQuery,graphql } from "gatsby"
import Img from "gatsby-image"
import { navigate } from '@reach/router';
import { Navbar, NavDropdown, Nav, Form, FormControl, Button } from 'react-bootstrap';
import "./style.scss";

export const TopNav = () => {
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

    const navMenu = [
        {label: "Resources",url:"#home",id:0},
        {label: "Jobs",url:"#link",id:1},
        {label: "Career Paths",url:"#link",id:2},
    ]

    return (
        <header className="main-nav">
            <div className="header-topbar text-center py-3">Give your job search a home with CareerScore</div>
            <Navbar bg="transparent" variant="dark" expand="lg" className="px-5">
                <Navbar.Brand href="#home">
                    <Img fixed={data.file.childImageSharp.fixed} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        {navMenu.map(item=>
                            <Nav.Link 
                                onClick={() => navigate(item.url)}
                                key={item.id}>
                                {item.label}
                            </Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}
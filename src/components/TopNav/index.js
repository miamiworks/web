import React, { useState, useEffect, useRef } from "react"
import { useStaticQuery,graphql } from "gatsby"
import Img from "gatsby-image"
import { navigate } from '@reach/router';
import { Navbar, Nav, Button} from 'react-bootstrap';
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
            desktop: file(relativePath: { regex: "/Logo_BlueCircle.png/" }) {
                childImageSharp {
                    fixed(width: 96, height: 96) {
                    ...GatsbyImageSharpFixed
                    }
                }
            }
            mobile: file(relativePath: { regex: "/Logo_BlueCircle.png/" }) {
                childImageSharp {
                    fixed(width: 75, height: 75) {
                    ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)

    const sources = [
      data.mobile.childImageSharp.fixed,
      {
        ...data.desktop.childImageSharp.fixed,
        media: `(min-width: 768px)`,
      },
    ]

    const offsetHeight = document.querySelector(".main-nav").offsetHeight

    return (
      <header
        className={
          "main-nav fixed-top" + (navBackground ? " sticky-active" : "")
        }
      >
        <div className="header-topbar text-center py-3">
          Give your job search a home with CareerScore
        </div>
        <Navbar
          bg="transparent"
          sticky="top"
          variant="dark"
          expand="lg"
          className="px-5"
        >
          <Navbar.Brand href="#home">
            <Img fixed={sources} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {Array.isArray(links) &&
                links.map((item, i) => {
                  const Component = item.component
                  return Component !== undefined ? (
                    <Component key={i} className="ml-5 nav-link" />
                  ) : item.to.charAt(0) === "#" ? (
                    <Link
                      key={i}
                      activeClass="active"
                      className="ml-5 nav-link"
                      to={item.to.substring(1)}
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-offsetHeight}
                    >
                      {item.label}
                    </Link>
                  ) : item.target !== "_blank" ? (
                    <Nav.Link
                      className="ml-5"
                      onClick={() => navigate(item.url)}
                      key={i}
                    >
                      {item.label}
                    </Nav.Link>
                  ) : (
                    <a
                      key={i}
                      className="ml-5 nav-link"
                      href={item.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={i}
                    >
                      {item.label}
                    </a>
                  )
                })}
              <Button
                onClick={() =>
                  window.open("https://submit.miamitech.works/jobs", "noopener")
                }
                variant="outline-warning"
              >
                Post a job
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    )
}
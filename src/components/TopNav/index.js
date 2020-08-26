import React, { useState, useEffect, useRef } from "react"
import { useStaticQuery,graphql } from "gatsby"
import Img from "gatsby-image"
import { navigate } from '@reach/router';
import { Navbar, Nav, Button} from 'react-bootstrap';
import { Link } from 'react-scroll'
import HamburgerDark from "../../images/hamburger-dark.svg"
import HamburgerLight from "../../images/hamburger-light.svg"

import "./style.scss";

export const TopNav = ({ links }) => {

    const [expanded, setExpanded] = useState(false)
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

    useEffect(() => {
      if(typeof document!=='undefined'){
        let body = document
          .querySelector("body")
        expanded? body.style.overflow="hidden":body.style.overflow="auto"
      }
    }, [expanded])

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

    const offsetHeight =
      typeof document !== "undefined" && document.querySelector(".main-nav")!==null
        ? document.querySelector(".main-nav").offsetHeight : 0;

    const navbarHeight =
      typeof document !== "undefined" &&
      document.querySelector(".navbar.navbar-expand-lg.navbar-dark") !== null
        ? document.querySelector(".navbar.navbar-expand-lg.navbar-dark")
            .offsetHeight
        : 0

    

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
          expanded={expanded}
          className="px-5"
        >
          <Navbar.Brand href="#home">
            <Img fixed={sources} />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className={expanded ? "active" : ""}
            onClick={e => setExpanded(!expanded)}
          >
            {navBackground ? <HamburgerDark /> : <HamburgerLight />}
          </Navbar.Toggle>
          <Navbar.Collapse
            id="basic-navbar-nav"
            style={{
              top: navbarHeight,
            }}
          >
            <Nav className="h-lg-auto text-center text-lg-left my-5 my-lg-0 px-5 px-lg-0 ml-lg-auto">
              {Array.isArray(links) &&
                links.map((item, i) => {
                  const Component = item.component
                  return Component !== undefined ? (
                    <Component
                      key={i}
                      className="my-4 my-lg-0 ml-lg-5 nav-link"
                    />
                  ) : item.to.charAt(0) === "#" ? (
                    <Link
                      key={i}
                      activeClass="active"
                      className="my-3 my-lg-0 ml-lg-5 nav-link"
                      to={item.to.substring(1)}
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-offsetHeight}
                      onClick={e=>setExpanded(false)}
                    >
                      {item.label}
                    </Link>
                  ) : item.target !== "_blank" ? (
                    <Nav.Link
                      className="my-lg-auto ml-5"
                      onClick={() => navigate(item.url)}
                      key={i}
                    >
                      {item.label}
                    </Nav.Link>
                  ) : (
                    <a
                      key={i}
                      className="ml-lg-5 nav-link"
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
                className={expanded ? "my-3" : "my-lg-auto"}
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
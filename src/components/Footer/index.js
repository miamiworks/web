import React from "react"
import { useStaticQuery,graphql } from "gatsby"
import Img from "gatsby-image"
import { navigate } from '@reach/router';
import { Navbar, Nav,Col,Row } from 'react-bootstrap';
import "./style.scss";

export const Footer = () => {

    return (
      <footer className="footer bg-primary text-white py-4">
        <Row className="container mx-auto">
          <Col xs={12} md={3} className="text-center text-md-left">
            <a
              href="https://www.beaconcouncil.com/terms-conditions/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Legal
            </a>
          </Col>
          <Col xs={12} md={6} className="text-center made-miami">
            Made in Miami 🌴
          </Col>
          <Col xs={12} md={3} className="text-center text-md-right">
            {new Date().getFullYear()} MiamiTech.Works
          </Col>
        </Row>
      </footer>
    )
}
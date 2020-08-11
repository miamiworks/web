import React from "react"
import { useStaticQuery,graphql } from "gatsby"
import Img from "gatsby-image"
import { navigate } from '@reach/router';
import { Navbar, Nav } from 'react-bootstrap';
import "./style.scss";

export const Footer = () => {

    return (
        <footer className="footer bg-primary text-white py-4">
            <div className="container row mx-auto">
                <div className="col-4 col-md-3 text-left">Legal</div>
                <div className="col-4 col-md-6 text-center made-miami">Made in Miami 🌴</div>
                <div className="col-4 col-md-3 text-right">{new Date().getFullYear()} MiamiTech.Works</div>
            </div>
        </footer>
    )
}
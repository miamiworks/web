import React from "react"
import Layout from "../components/Layout"
import Section from "../components/Section"
import { TopNav } from "../components/TopNav"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from "react-bootstrap/Container"

export default function Home() {
    return (
      <Layout bodyClass="home">
        <Section className="home-hero">
            <Container className="h-100 d-flex align-items-end">
                <Row>
                    <Col xs={12}>
                        <h1>Find a new career in Miami Tech</h1>
                        <h2>Fast track to a job through curated education pathways</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs={3}>
                        
                    </Col>
                    <Col xs={3}>
                        
                    </Col>
                    <Col xs={3}>
                        
                    </Col>
                    <Col xs={3}>
                        
                    </Col>
                </Row>
            </Container>

          <div className="motherboard-left" />
          <div className="motherboard-right" />
        </Section>
      </Layout>
    )
}

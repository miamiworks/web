import React from "react"
import Layout from "../components/Layout"
import Section from "../components/Section"
import Sponsors from "../components/Sponsors"
import { TopNav } from "../components/TopNav"
import ResourceIcon from "../components/ResourceIcon"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import beaconURL from "../images/beacon-logo.png"
import Container from "react-bootstrap/Container"
import { faSuitcase,faCommentMedical,faCalendarStar,faChartNetwork } from "@fortawesome/pro-regular-svg-icons"

export default function Home() {
    const heroFeatures = [
      {
        title: "Job Postings",
        bg: "#7CE6C8",
        color: "#4F8B7A",
        icon: faSuitcase,
      },
      {
        title: "Skill Pathways",
        bg: "#4044AA",
        color: "#F8FAFA",
        icon: faChartNetwork,
      },
      {
        title: "Career Coaching",
        bg: "#CACACA",
        color: "#F8FAFA",
        icon: faCommentMedical,
      },
      {
        title: "Events & Resources",
        bg: "#F9DE8E",
        color: "#E1BB44",
        icon: faCalendarStar,
      },
    ]

    const meta = [
      { name: "charset", content: "UTF-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, maximum-scale=1",
      },
      { httpEquiv: "X-UA-Compatible", content: "IE=edge,chrome=1" },
    ]

    return (
      <Layout
        bodyClass="home"
        description=""
        lang="en"
        meta={meta}
      >
        <Section className="home-hero h-100 position-relative">
          <TopNav/>
          <Container>
            <Row className="mb-5 mx-auto">
              <Col xs={12}>
                <h1 className="mb-3">Find a new career in Miami Tech</h1>
                <h2>Fast track to a job through curated education pathways</h2>
              </Col>
            </Row>
            <Row className="pt-5 feature-row container mx-auto">
              {heroFeatures.map((item, index) => (
                <Col xs={6} md={4} lg={3} key={index}>
                  <ResourceIcon
                    title={item.title}
                    bg={item.bg}
                    color={item.color}
                    icon={item.icon}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </Section>

        <Section className="explore-jobs">

        </Section>
        
        <Section className="key-skills">

        </Section>
        
        <Section className="career-coaching">

        </Section>

        <Section className="events">

        </Section>

        <Section className="job-search py-5">
            <div className="container">
                <h2 className="text-center">Want to nail your job serach?</h2>
                <h3 className="text-center">check out our free job search filed guide</h3>
                <p>30 exclusive tips & tricks form recruiting pros for navigating your search ducing COVID-19</p>
                <button>Download Guide</button>
            </div>
        </Section>

        <Section className="section-sponsors container py-5">
            <h2 className="text-center">Miami Tech Works Coalition</h2>
            <h3 className="text-center">Made possible by</h3>
            <div>
                <img src={beaconURL} />
            </div>
            <div class="logos">
                <Sponsors />
            </div>
        </Section>

      </Layout>
    )
}

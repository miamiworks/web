import React,{useState} from "react"
import { 
  faSuitcase,
  faCommentMedical,
  faCalendarStar,
  faChartNetwork 
} from "@fortawesome/pro-regular-svg-icons"
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect"
import Layout from "../components/Layout"
import Section from "../components/Section"
import KeySkillsDesktop from "../components/KeySkillsDesktop"
import KeySkillsMobile from "../components/KeySkillsMobile"
import { TopNav } from "../components/TopNav"
import ResourceIcon from "../components/ResourceIcon"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from "react-bootstrap/Container"
import cardTopImg from "../images/cardTopClass.png"
import gaLogo from "../images/gen-assembly-logo.png"
import geeksLogo from "../images/4geeks-logo.png"
import {useWindowSize} from "../utils/hooks"

export default function Home() {
    const [skill,setSkill] = useState(null);
    const [course,setCourse] = useState(null);
    const [width,height] = useWindowSize();

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

    const keySkillsMenu = [
      {
        label: "Software Engineering",
        key: "software-engineering",
      },
      {
        label: "UX Design",
        key: "ux-design",
      },
      {
        label: "Data Science",
        key: "data-science",
      },
      {
        label: "Cyber Security",
        key: "cyber-security",
      },
      {
        label: "Digital Marketing",
        key: "digital-marketing",
      },
      {
        label: "Machine Learning",
        key: "machine-learning",
      },
      {
        label: "IT Administration",
        key: "it-administration",
      },
    ]

    const courseData = [
      {
        topImgAlt: "Gen Assembly",
        topImg: cardTopImg,
        logoSrc: gaLogo,
        title: "Fullstack Web Developer",
        timeframe: "12 weeks",
        buttonText: "Learn More",
        id: "ga-fullstack",
      },
      {
        topImgAlt: "4geeks",
        topImg: cardTopImg,
        logoSrc: geeksLogo,
        title: "Fullstack Web Developer",
        timeframe: "12 weeks",
        buttonText: "Learn More",
        id: "geeks-fullstack",
      },
      {
        topImgAlt: "Gen Assembly",
        topImg: cardTopImg,
        logoSrc: gaLogo,
        title: "Web Immersive",
        timeframe: "12 weeks",
        buttonText: "Learn More",
        id: "ga-fullstack",
      },
      {
        topImgAlt: "Gen Assembly",
        topImg: cardTopImg,
        logoSrc: gaLogo,
        title: "Data Science Immersion",
        timeframe: "12 weeks",
        buttonText: "Learn More",
        id: "ga-fullstack",
      },
    ]

    return (
      <Layout bodyClass="home" description="" lang="en" meta={meta}>
        <Section className="home-hero h-100 position-relative">
          <TopNav />
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

        <Section className="explore-jobs"></Section>

        <Section className="key-skills d-flex align-items-center justify-content-center">
          <Container>
            <h2 className="text-white mb-3">
              <span className="text-warning">Learn</span> Key Skills
            </h2>
            <p className="display-5 text-warning h2 mb-5 pb-5">
              to land jobs of the future
            </p>
            {isMobile || width < 990 ? (
              <KeySkillsMobile
                keySkillsMenu={keySkillsMenu}
                courseData={courseData}
                setCourse={setCourse}
                setSkill={setSkill}
                skill={skill}
              />
            ) : (
              <KeySkillsDesktop
                keySkillsMenu={keySkillsMenu}
                courseData={courseData}
                setCourse={setCourse}
                setSkill={setSkill}
                skill={skill}
              />
            )}
          </Container>
        </Section>

        <Section className="career-coaching"></Section>

        <Section className="events"></Section>

        <Section className="job-search"></Section>

        <Section className="sponsors"></Section>
      </Layout>
    )
}

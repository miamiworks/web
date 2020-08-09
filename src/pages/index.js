import React,{useState} from "react"
import { 
  faSuitcase,
  faCommentMedical,
  faCalendarStar,
  faChartNetwork 
} from "@fortawesome/pro-regular-svg-icons"
import Layout from "../components/Layout"
import Section from "../components/Section"
import { TopNav } from "../components/TopNav"
import ResourceIcon from "../components/ResourceIcon"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Tab from "react-bootstrap/Tab"
import CourseCard from "../components/CourseCard"
import cardTopImg from "../images/cardTopClass.png"
import gaLogo from "../images/gen-assembly-logo.png"
import geeksLogo from "../images/4geeks-logo.png"

export default function Home() {
    const [skill,setSkill] = useState(null);
    const [course,setCourse] = useState(null);

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
      },
      {
        topImgAlt: "4geeks",
        topImg: cardTopImg,
        logoSrc: geeksLogo,
        title: "Fullstack Web Developer",
        timeframe: "12 weeks",
        buttonText: "Learn More",
      },
      {
        topImgAlt: "Gen Assembly",
        topImg: cardTopImg,
        logoSrc: gaLogo,
        title: "Web Immersive",
        timeframe: "12 weeks",
        buttonText: "Learn More",
      },
      {
        topImgAlt: "Gen Assembly",
        topImg: cardTopImg,
        logoSrc: gaLogo,
        title: "Data Science Immersion",
        timeframe: "12 weeks",
        buttonText: "Learn More",
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
            <Tab.Container
              id="skills-main"
              defaultActiveKey="software-engineering"
            >
              <Row>
                <Col xs={12} sm={4} lg={3} className="align-items-stretch">
                  <Nav className="flex-column skills-nav h-100 align-content-between justify-content-between p-2">
                    {keySkillsMenu.map(item => (
                      <Nav.Link
                        eventKey={item.key}
                        key={item.key}
                        className="text-white"
                        onClick={() => setSkill(null)}
                      >
                        {item.label}
                      </Nav.Link>
                    ))}
                  </Nav>
                </Col>
                <Col className="right-container">
                  <Tab.Content className="h-100">
                    <Tab.Pane eventKey="software-engineering" className="h-100">
                      {skill === "software-engineering" ? (
                        <Row className="h-100">
                          <Col className="p-0">
                            <Row className="mb-4 h-100 mx-lg-n2">
                              {courseData.map((item, index) => (
                                <Col key={index} md={3} className="px-lg-2">
                                  <CourseCard
                                    topImgAlt={item.topImgAlt}
                                    topImg={item.topImg}
                                    logoSrc={item.logoSrc}
                                    title={item.title}
                                    timeframe={item.timeframe}
                                    buttonText={item.buttonText}
                                    setter={setCourse}
                                    value={course}
                                  />
                                </Col>
                              ))}
                            </Row>
                          </Col>
                        </Row>
                      ) : (
                        <Row className="h-100">
                          <Col
                            className="software-eng-img p-0 d-flex flex-column justify-content-end align-items-end"
                            xs={5}
                            md={4}
                          >
                            <div className="skills-overlay p-3 w-100 h-50">
                              <h3 className="">Software Engineering</h3>
                              <p className="mb-2">Salary range in Miami</p>
                              <p className="skills-overlay-salary">
                                $55-110K per year
                              </p>
                            </div>
                          </Col>
                          <Col className="right-column p-3 h-100">
                            <Row className="mb-4">
                              <Col>
                                {" "}
                                <h4 className="title">What they do?</h4>
                                <p>
                                  process of analyzing user requirements and
                                  then designing, building, and testing software
                                  application which will satisfy those
                                  requirements
                                </p>
                              </Col>
                            </Row>
                            <Row className="mb-4">
                              <Col>
                                <h4 className="title">
                                  What’s the job outlook?
                                </h4>
                                <p>
                                  process of analyzing user requirements and
                                  then designing, building, and testing software
                                  application which will satisfy those
                                  requirements
                                </p>
                              </Col>
                            </Row>
                            <Row className="position-absolute fixed-bottom p-3">
                              <Col>
                                <p className="mb-4">
                                  <strong>
                                    4 local course providers available
                                  </strong>
                                </p>
                                <button
                                  className="btn btn-outline-warning"
                                  onClick={() =>
                                    setSkill("software-engineering")
                                  }
                                >
                                  See Courses
                                </button>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      )}
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Container>
        </Section>

        <Section className="career-coaching"></Section>

        <Section className="events"></Section>

        <Section className="job-search"></Section>

        <Section className="sponsors"></Section>
      </Layout>
    )
}

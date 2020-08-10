import React,{useState} from "react"
import { 
  faSuitcase,
  faCommentMedical,
  faCalendarStar,
  faChartNetwork 
} from "@fortawesome/pro-regular-svg-icons"
import { isMobile } from "react-device-detect"
import {useWindowSize} from "../utils/hooks"
import Layout from "../components/Layout"
import Section from "../components/Section"
import Sponsors from "../components/Sponsors"
import KeySkillsDesktop from "../components/KeySkillsDesktop"
import KeySkillsMobile from "../components/KeySkillsMobile"
import { TopNav } from "../components/TopNav"
import ResourceIcon from "../components/ResourceIcon"
import JobCard from "../components/JobCard"
import EventsCard from "../components/eventsCard"
import {Button, Badge, CardDeck} from "react-bootstrap"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import beaconURL from "../images/beacon-logo.png"
import Container from "react-bootstrap/Container"
import Bubble from "../images/Chat-Bubbles.png"
import cardTopImg from "../images/cardTopClass.png"
import gaLogo from "../images/gen-assembly-logo.png"
import geeksLogo from "../images/4geeks-logo.png"

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
        description:
          "Google IT Automation with Python: 16-week free program that prepares students to advance in their career in IT by providing them with job-ready skills with Python, which is currently the most in-demand programming language by employers. The program will prepare students on IT tasks automation with Python, IT resources management at scale, and execution of technical skills to solve real-world IT problems.",
      },
      {
        topImgAlt: "4geeks",
        topImg: cardTopImg,
        logoSrc: geeksLogo,
        title: "Fullstack Web Developer",
        timeframe: "12 weeks",
        buttonText: "Learn More",
        id: "geeks-fullstack",
        description:
          "Google IT Automation with Python: 16-week free program that prepares students to advance in their career in IT by providing them with job-ready skills with Python, which is currently the most in-demand programming language by employers. The program will prepare students on IT tasks automation with Python, IT resources management at scale, and execution of technical skills to solve real-world IT problems.",
      },
      {
        topImgAlt: "Gen Assembly",
        topImg: cardTopImg,
        logoSrc: gaLogo,
        title: "Web Immersive",
        timeframe: "12 weeks",
        buttonText: "Learn More",
        id: "ga-fullstack",
        description:
          "Google IT Automation with Python: 16-week free program that prepares students to advance in their career in IT by providing them with job-ready skills with Python, which is currently the most in-demand programming language by employers. The program will prepare students on IT tasks automation with Python, IT resources management at scale, and execution of technical skills to solve real-world IT problems.",
      },
      {
        topImgAlt: "Gen Assembly",
        topImg: cardTopImg,
        logoSrc: gaLogo,
        title: "Data Science Immersion",
        timeframe: "12 weeks",
        buttonText: "Learn More",
        id: "ga-fullstack",
        description:
          "Google IT Automation with Python: 16-week free program that prepares students to advance in their career in IT by providing them with job-ready skills with Python, which is currently the most in-demand programming language by employers. The program will prepare students on IT tasks automation with Python, IT resources management at scale, and execution of technical skills to solve real-world IT problems.",
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

        <Section className="explore-jobs">
            <Container className="exjob">
                <Row className="mb-5 mx-auto">
                    <Col xs={12}>
                        <h1 className="mb-3 exjoTitle">Explore <span>jobs you`ll love</span></h1>
                        <h2 className= "exjoSub">from companies hiring locally</h2>
                    </Col>
                </Row>
                <Row className="mb-5 mx-auto">
                    <Col xs={12}>
                        <Button variant="info">
                            <Badge pill variant="light" className="mr-1 buttonGreen">&nbsp;</Badge> 
                            Design                            
                        </Button>
                        <Button variant="primary">
                            <Badge pill variant="light" className="mr-1 buttonBlue">&nbsp;</Badge> 
                            engineering                           
                        </Button>
                        <Button variant="warning">
                            <Badge pill variant="light" className="mr-1 buttonYellow">&nbsp;</Badge> 
                            product                            
                        </Button>
                    </Col>
                </Row>
                <CardDeck>
                    <JobCard jobType="product" jobTitle="Product Designer" companyName="Kaseya" date="Posted 3 days ago"/>
                    <JobCard jobType="product" jobTitle="Web Developer" companyName="Kaseya" date="Posted 3 days ago"/>
                    <JobCard jobType="product" jobTitle="Product Manager" companyName="Kaseya" date="Posted 3 days ago"/>
                </CardDeck>
            </Container>
        </Section>

        <Section
          className={
            width <= 1080 || isMobile
              ? "key-skills mobile d-flex flex-column align-items-center justify-content-center pt-5"
              : "key-skills d-flex flex-column align-items-center justify-content-center"
          }
        >
          <Container>
            <h2
              className={
                width <= 1080 || isMobile
                  ? "text-white mb-0"
                  : "text-white mb-3"
              }
            >
              <span className="text-warning">Learn</span> Key Skills
            </h2>
            <p
              className={
                width <= 1080 || isMobile
                  ? "text-warning mb-5 pb-0"
                  : "text-warning h2 mb-5 pb-5"
              }
            >
              to land jobs of the future
            </p>
          </Container>
          {width <= 990 || isMobile ? (
            <KeySkillsMobile
              keySkillsMenu={keySkillsMenu}
              courseData={courseData}
              course={course}
              setCourse={setCourse}
              setSkill={setSkill}
              skill={skill}
            />
          ) : (
            <KeySkillsDesktop
              keySkillsMenu={keySkillsMenu}
              courseData={courseData}
              course={course}
              setCourse={setCourse}
              setSkill={setSkill}
              skill={skill}
            />
          )}
        </Section>

        <Section className="career-coaching">
            <Container className="coachingSec">
                <Row className="mb-5 mx-auto">
                    <Col xs={12}>
                        <h1 className="mb-3 coachTitle">Virtual <span>Career Coaching</span></h1>
                        <h2 className= "coachSub">guiding your job search process</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className="bubbleSec">
                        <img src={Bubble} className="img-fluid" alt="Responsive img"></img>
                    </Col>
                    <Col md={6} className="descSec">
                        <h3>1 ON 1 <span>COACHING</span></h3>
                        <hr/>
                        <p className="text-left lead">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec 
                            volutpat ut nunc at ultricies. Cras massa lacus, maximus id ligula 
                            sed, porttitor ultrices magna. Sed sed consequat magna. Integer 
                            vulputate augue metus, a viverra odio tristique ut. Proin 
                            efficitur neque vitae nisi dictum efficitur. In mi leo, finibus 
                            nec porttitor vitae, cursus eu tortor. Nam vitae odio eu neque 
                            scelerisque porttitor. 
                        </p>
                        <button type="button" className="btn btn-primary">Button 1</button>
                    </Col>
                </Row>
            </Container>
        </Section>

       <Section className="section-events">
            <Container className="eventContainer">
                <Row className="mb-5 mx-auto">
                    <Col xs={12}>
                        <h1 className="mb-3 eventTitle">Events <span>& Resources</span></h1>
                        <h2 className= "eventSub">Network and make connections virtually</h2>
                    </Col>
                </Row>
                <Row className="mb-5 mx-auto workshopRow">
                    <Col xs={12}>
                        <h2 className= "workshopTitle">Upcoming Workshops</h2>
                    </Col>
                </Row>
                <CardDeck>
                    <EventsCard 
                    eventName="1MPACT: Impactful Initiatives to Support the Local Business Community"
                    speakerNam="Doug Skoke"
                    speakerPosition="President, CEO"
                    comingFrom="BENJAMIN DOUGLAS"
                    />
                    <EventsCard 
                    eventName="1MPACT: Impactful Initiatives to Support the Local Business Community"
                    speakerNam="Doug Skoke"
                    speakerPosition="President, CEO"
                    comingFrom="BENJAMIN DOUGLAS"
                    />
                </CardDeck>
            </Container>
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

import React, { useState } from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Tab from "react-bootstrap/Tab"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Spinner from "react-bootstrap/Spinner"
import CourseCard from "../CourseCard"
import { useWindowSize } from "../../utils/hooks"
import { isMobile } from "react-device-detect"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock } from "@fortawesome/free-regular-svg-icons"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { faTimes } from "@fortawesome/pro-regular-svg-icons"
import "./style.scss"

function CourseSyllabusModal(props) {
  const { onHide, course } = props
  const [width, height] = useWindowSize()
  const [submitting, setSubmitting] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      setSent(true)
      setSubmitting(false)
    }, 500)
  }

  const handleDownload = () => {}

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="syllabus-request"
      dialogClassName={
        !sent
          ? "d-flex h-100 w-100 align-items-center justify-content-center"
          : "d-flex h-100 w-100 align-items-center justify-content-center sent"
      }
    >
      <FontAwesomeIcon
        icon={faTimes}
        className="position-absolute close-icon"
        onClick={() => onHide(true)}
      />
      {!sent ? (
        <Modal.Title as="h2" id="syllabus-request" className="px-3">
          Learn More <span className="light-purple">About Our Offering</span>
        </Modal.Title>
      ) : (
        <Modal.Title as="h2" id="syllabus-request" className="px-3">
          Success <span className="light-purple">Prompt!</span>
        </Modal.Title>
      )}
      <Modal.Body>
        {!sent ? (
          <Form onSubmit={e => handleSubmit(e)}>
            <Form.Group controlId="fullName" className="mb-5">
              <Form.Label className="d-block">Full Name</Form.Label>
              <Form.Control type="text" placeholder="" size="lg" required />
            </Form.Group>
            <Form.Group controlId="emailAddress" className="mb-5">
              <Form.Label className="d-block">Email address</Form.Label>
              <Form.Control type="email" placeholder="" size="lg" required />
            </Form.Group>
            <Form.Group controlId="telephone" className="mb-5">
              <Form.Label className="d-block">
                Phone Number <span className="text-muted">(optional)</span>
              </Form.Label>
              <Form.Control type="tel" placeholder="" size="lg" />
            </Form.Group>

            <Button variant="primary" size="lg" type="submit" block>
              {submitting ? (
                <Spinner
                  as="span"
                  animation="border"
                  size="md"
                  role="status"
                  aria-hidden="true"
                />
              ) : (
                "Submit"
              )}
            </Button>
          </Form>
        ) : (
          <div>
            <p className="mt-0 mb-5">
              Now that you have completed the last card, get a head start and
              prepare for the item you signed up for.
            </p>
            <Button variant="primary" size="lg" onClick={handleDownload}>
              Download Syllabus
            </Button>
          </div>
        )}
      </Modal.Body>
    </Modal>
  )
}


export default function KeySkillsMobile(props){
    const {
      keySkillsMenu,
      courseData,
      course,
      setCourse,
      setSkill,
      skill
    } = props
    const [modalShow, setModalShow] = useState(false)

    const type = skill!==null?keySkillsMenu.find(item=>item.key===skill).label:"";


    const getContent = () => {
      let content
      if (skill !== null && course === null) {
        content = (
          <Row className="h-100">
            <Col className="p-0">
              <Row className="mb-4 h-100 mx-lg-n2">
                <div className="mobile-heading">
                  <Row>
                    <Col
                      xs={2}
                      className="d-flex flex-column align-items-center justify-content-center"
                    >
                      <div className="circle">
                        <FontAwesomeIcon size="lg" icon={faArrowLeft} />
                      </div>
                    </Col>
                    <Col className="d-flex flex-column align-items-center justify-content-center">
                      <h2 className="my-auto">Local {type} Course Options</h2>
                    </Col>
                  </Row>
                </div>
                {courseData.map((item, index) => (
                  <Col key={index} xs={12} md={3} className="course-column">
                    <CourseCard
                      topImgAlt={item.topImgAlt}
                      topImg={item.topImg}
                      logoSrc={item.logoSrc}
                      title={item.title}
                      timeframe={item.timeframe}
                      buttonText={item.buttonText}
                      setter={setCourse}
                      value={item}
                    />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        )
      } else if (course !== null && skill !== null) {
        content = (
          <Row className="h-100">
            <Col
              className="software-eng-img course-detail p-0 d-flex flex-column justify-content-end align-items-end"
              md={5}
            >
              <div className="skills-overlay course-detail p-3 w-100">
                <h3 className="h2">{course.title}</h3>
              </div>
            </Col>
            <Col className="right-column course-detail h-100 position-relative">
              <FontAwesomeIcon
                icon={faTimes}
                className="position-absolute close-icon"
              />
              <Row className="mb-4">
                <Col>
                  <Row className="mb-4">
                    <Col>
                      <FontAwesomeIcon icon={faClock} className="mr-2" />
                      {course.timeframe}
                    </Col>
                    <Col>
                      <img
                        src={course.logoSrc}
                        alt={course.topImgAlt + " logo"}
                        className="float-right"
                      />
                    </Col>
                  </Row>
                  <h4 className="title">Course Description</h4>
                  <p>{course.description}</p>
                </Col>
              </Row>

              <Row className="px-5 pb-3">
                <Col>
                  <button className="btn btn-warning mr-3" onClick={() => {}}>
                    Apply Now
                  </button>

                  <button
                    className="btn btn-outline-warning"
                    onClick={() => setModalShow(true)}
                  >
                    Request Syllabus
                  </button>
                </Col>
              </Row>
            </Col>
          </Row>
        )
      } else {
        content = (
          <Row className="h-100">
            <Col className="software-eng-img p-0 m-0" xs={12}>
              <div className="skills-overlay p-3 w-100 h-100">
                <h3 className="">Software Engineering</h3>
                <p className="mb-2">Salary range in Miami</p>
                <p className="skills-overlay-salary">$55-110K per year</p>
              </div>
            </Col>
            <Col className="right-column p-3 h-100">
              <Row className="mb-4">
                <Col>
                  {" "}
                  <h4 className="title">What they do?</h4>
                  <p>
                    process of analyzing user requirements and then designing,
                    building, and testing software application which will
                    satisfy those requirements
                  </p>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col>
                  <h4 className="title">What’s the job outlook?</h4>
                  <p>
                    process of analyzing user requirements and then designing,
                    building, and testing software application which will
                    satisfy those requirements
                  </p>
                </Col>
              </Row>
              <Row className="p-3">
                <Col>
                  <p className="mb-4">
                    <strong>4 local course providers available</strong>
                  </p>
                  <button
                    className="btn btn-outline-warning"
                    onClick={() => setSkill("software-engineering")}
                  >
                    See Courses
                  </button>
                </Col>
              </Row>
            </Col>
          </Row>
        )
      }

      return content
    }
    return (
      <Container className="key-skills-mobile">
        <CourseSyllabusModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        <Tab.Container
          id="skills-desktop"
          defaultActiveKey="software-engineering"
        >
          <Row>
            <Col xs={12} className="">
              <Nav className="skills-nav" as="ul">
                {keySkillsMenu.map(item => (
                  <Nav.Item as="li" key={item.key}>
                    <Nav.Link
                      eventKey={item.key}
                      onClick={() => setSkill(null)}
                    >
                      {item.label}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
            <Col className="right-container w-100">
              <Tab.Content className="h-100">
                <Tab.Pane eventKey="software-engineering" className="h-100">
                  {getContent()}
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    )
}
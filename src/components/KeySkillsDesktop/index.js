import React, { useState, useContext } from "react"
import { Context } from "../../store/appContext"
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock,faTimes } from "@fortawesome/free-regular-svg-icons"
import cardTopImg from "../../images/cardTopClass.png"
import "./style.scss"

function CourseSyllabusModal(props) {
  const {onHide,course} = props;
  const { store, actions } = useContext(Context)
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [fullName, setFullName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e)=>{
    e.preventDefault();
    setSubmitting(true);

    try {
      let res = await actions.submitSyllabusRequest(
        fullName,
        email,
        phone,
        course.program_syllabus_file_name
      )
      if (!(res instanceof Error)) {
        setSubmitting(false)
        setSent(true)
      } else {
        throw new Error(res.message)
      }
    } catch (err) {
      setError(err)
    }
  }

  const handleExit = ()=>{
    setSent(false);
    setSubmitting(false)
    setError(null);
    setFullName(null);
    setEmail(null);
    setPhone(null);
  }

  return (
    <Modal
      {...props}
      onExited={handleExit}
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
        onClick={() => {
          onHide(true)
          setSent(false)
        }}
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
              <Form.Control
                type="text"
                placeholder=""
                size="lg"
                required
                onChange={e => setFullName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="emailAddress" className="mb-5">
              <Form.Label className="d-block">Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder=""
                size="lg"
                required
                onChange={e => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="telephone" className="mb-5">
              <Form.Label className="d-block">
                Phone Number <span className="text-muted">(optional)</span>
              </Form.Label>
              <Form.Control
                type="tel"
                placeholder=""
                size="lg"
                onChange={e => setPhone(e.target.value)}
              />
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
            <a
              className="btn btn-primary btn-lg"
              href={course.program_syllabus_url}
              target="_blank"
              rel="noreferrer"
            >
              Download Syllabus
            </a>
          </div>
        )}
      </Modal.Body>
    </Modal>
  )
}

export default function KeySkillsDesktop(props){
    const {
      keySkillsMenu,
      courseData,
      course,
      setCourse,
      setSkill,
      skill,
      setType,
      type,
      path,
    } = props
    const [modalShow, setModalShow] = useState(false)

    const getContent = ()=>{
      let content;
      if(skill !== null && course === null){
        content = (
          <Row className="h-100">
            <Col className="p-0">
              <Row className="mb-4 h-100 mx-lg-n2">
                {courseData &&
                  courseData
                    .filter(item => item.program_skill_pathway===skill)
                    .slice(0, 4)
                    .map((item, index) => (
                      <Col key={index} md={3} className="px-lg-2">
                        <CourseCard
                          topImgAlt=""
                          topImg={cardTopImg}
                          logoSrc={item.provider_logo_url}
                          title={item.program_name}
                          provider={item.provider_name_}
                          timeframe={`${item.program_duration_amount} ${item.program_duration_units}`}
                          buttonText="Learn More"
                          setter={setCourse}
                          value={item}
                        />
                      </Col>
                    ))}
              </Row>
            </Col>
          </Row>
        )
      }else if(course!==null && skill!==null){
        content = (
          <Row className="h-100">
            <Col
              className="software-eng-img course-detail p-0 d-flex flex-column justify-content-end align-items-end"
              md={5}
            >
              <div className="skills-overlay course-detail p-3 w-100">
                <h3 className="h2">{course.program_name}</h3>
              </div>
            </Col>
            <Col className="right-column course-detail h-100 position-relative">
              <FontAwesomeIcon
                icon={faTimes}
                className="position-absolute close-icon"
                onClick={() => {
                  setCourse(null)
                }}
              />
              <Row className="mb-4">
                <Col>
                  <Row className="mb-4">
                    <Col>
                      <FontAwesomeIcon icon={faClock} className="mr-2" />
                      {`${course.program_duration_amount} ${course.program_duration_units}`}
                    </Col>
                    <Col>
                      <img
                        src={course.provider_logo_url}
                        alt={course.provider_name_}
                        className="float-right"
                      />
                    </Col>
                  </Row>
                  <h4 className="title">Course Description</h4>
                  <p>{course.program_description_}</p>
                </Col>
              </Row>

              <Row className="position-absolute fixed-bottom px-5 pb-3">
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
      }else {
        content = (<Row className="h-100">
          <Col
            className="software-eng-img p-0 d-flex flex-column justify-content-end align-items-end"
            xs={5}
            md={4}
          >
            <div className="skills-overlay p-3 w-100 h-50">
              <h3 className="">{path && path.label}</h3>
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
                  building, and testing software application which will satisfy
                  those requirements
                </p>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col>
                <h4 className="title">What’s the job outlook?</h4>
                <p>
                  process of analyzing user requirements and then designing,
                  building, and testing software application which will satisfy
                  those requirements
                </p>
              </Col>
            </Row>
            <Row className="position-absolute fixed-bottom p-3">
              <Col>
                <p className="mb-4">
                  <strong>4 local course providers available</strong>
                </p>
                <button
                  className="btn btn-outline-warning"
                  onClick={() => path && setSkill(path.label)}
                >
                  See Courses
                </button>
              </Col>
            </Row>
          </Col>
        </Row>)
      }

      return content;
    }
    return (
      <Container className="key-skills-desktop">
        <CourseSyllabusModal
          show={modalShow}
          course={course && course}
          onHide={() => setModalShow(false)}
        />
        <Tab.Container
          id="skills-desktop"
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
                    onClick={() => {
                      setSkill(null)
                      setType(item.key)
                    }}
                  >
                    {item.label}
                  </Nav.Link>
                ))}
              </Nav>
            </Col>
            <Col className="right-container">
              <Tab.Content className="h-100">
                <Tab.Pane eventKey={type} className="h-100">
                  {getContent()}
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    )
}
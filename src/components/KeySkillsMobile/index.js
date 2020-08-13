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
import { useWindowSize } from "../../utils/hooks"
import { isMobile } from "react-device-detect"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock } from "@fortawesome/free-regular-svg-icons"
import { faArrowLeft, faTimes } from "@fortawesome/free-solid-svg-icons"
import FireImage from "../FireImage"
import "./style.scss"

function CourseSyllabusModal(props) {
  const { onHide, course } = props
  const { store, actions } = useContext(Context)
  const [submitting, setSubmitting] = useState(false)
  const [sent, setSent] = useState(false)
  const [fullName, setFullName] = useState(null)
  const [email, setEmail] = useState(null)
  const [phone, setPhone] = useState(null)
  const [error, setError] = useState(null)
  const [width, height] = useWindowSize()
  const handleSubmit = async e => {
    e.preventDefault()
    setSubmitting(true)

    try {
      let res = await actions.submitRequest("syllabus",
        fullName,
        email,
        phone,
        course.id
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

  const handleExit = () => {
    setSent(false)
    setSubmitting(false)
    setError(null)
    setFullName(null)
    setEmail(null)
    setPhone(null)
  }

  const buildDialogClasses = ()=>{
    let classes;
    if(width<=990||isMobile){
      !sent
        ? (classes = "mobile d-flex h-100 w-100")
        : (classes = "mobile d-flex h-100 w-100 sent")
    }else{
      !sent
        ? (classes = "d-flex h-100 w-100")
        : (classes = "d-flex h-100 w-100 sent")
    }
    return classes;
  }
  return (
    <Modal
      {...props}
      onExited={handleExit}
      size="lg"
      aria-labelledby="syllabus-request"
      dialogClassName={buildDialogClasses()}
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
            <Form.Group className="mb-5">
              <Form.Control type="text" hidden value={error} />
              <Form.Control.Feedback type="invalid">
                {error}
              </Form.Control.Feedback>
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
          <div className="w-100">
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


export default function KeySkillsMobile(props){
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
    const [width, height] = useWindowSize()
    const { store, actions } = useContext(Context)

    const getCourseProviderCount = () => {
      let aux =
        store &&
        path &&
        store.programs.map(item => {
          if (item.program_skill_pathway === path.skill_pathway_name)
            return item.provider_name
        })
      let unique = [...new Set(aux)]
      return unique.length
    }

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
                        <FontAwesomeIcon
                          size="lg"
                          icon={faArrowLeft}
                          onClick={() => setSkill(null)}
                        />
                      </div>
                    </Col>
                    <Col className="d-flex flex-column align-items-center justify-content-center">
                      <h2 className="my-auto">Local {type} Course Options</h2>
                    </Col>
                  </Row>
                </div>
                {courseData &&
                  courseData
                    .filter(item => item.program_skill_pathway === skill)
                    .slice(0, 4)
                    .map((item, index) => (
                      <Col
                        key={index}
                        xs={12}
                        md={6}
                        lg={3}
                        className="course-column"
                      >
                        <CourseCard
                          topImgAlt={item.program_skill_pathway}
                          topImg={item.program_background_image_path}
                          logo={item.provider_logo_file_path}
                          title={item.program_name}
                          provider={item.provider_name}
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
      } else if (course !== null && skill !== null) {
        content = (
          <Row className="h-100">
            <Col
              className="software-eng-img course-detail p-0 d-flex flex-column justify-content-end align-items-end"
              lg={5}
            >
              <FireImage
                name={course && course.program_background_image_path}
                alt={course && course.program_name}
                className="bg-image h-100 w-100"
              />
              <div
                className={
                  width <= 990 || isMobile
                    ? "position-absolute skills-overlay course-detail px-4 py-3 w-100"
                    : "position-absolute skills-overlay course-detail p-3 w-100"
                }
              >
                <h3 className="h2 mb-0">{course.program_name}</h3>
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
                      <FireImage
                        name={course.provider_logo_file_path}
                        alt={course.provider_name}
                        className="float-right skills-provider-logo"
                      />
                    </Col>
                  </Row>
                  <h4 className="title">Course Description</h4>
                  <p>{course.program_description}</p>
                </Col>
              </Row>

              <Row className="px-lg-5 pb-lg-3">
                <Col xs={12}>
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
      } else if(path){
        content = (
          <Row className="h-100">
            <Col className="software-eng-img p-0 m-0" xs={12}>
              <FireImage
                name={path && path.image_file_path}
                alt={path && path.skill_pathway_name}
                className="bg-image h-100 w-100"
              />

              <div className="position-absolute skills-overlay p-3 w-100">
                <h3 className="">{path && path.skill_pathway_name}</h3>
                <p className="mb-2">Salary range in Miami</p>
                <p className="skills-overlay-salary">
                  {path && path.salary_range} per year
                </p>
              </div>
            </Col>
            <Col className="right-column p-3 h-100">
              <Row className="mb-4">
                <Col>
                  {" "}
                  <h4 className="title">What they do?</h4>
                  <p>{path && path.job_description}</p>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col>
                  <h4 className="title">What’s the job outlook?</h4>
                  <p>{path && path.job_outlook}</p>
                </Col>
              </Row>
              <Row className="p-3">
                <Col>
                  <p className="mb-4">
                    <strong>
                      {getCourseProviderCount()} local course providers
                      available
                    </strong>
                  </p>
                  <button
                    className="btn btn-outline-warning"
                    onClick={() => path && setSkill(path.skill_pathway_name)}
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
          course={course && course}
          onHide={() => setModalShow(false)}
        />
        <Tab.Container
          id={width <= 990 || isMobile ? "skills-mobile" : "skills-desktop"}
          defaultActiveKey={type}
        >
          <Row>
            <Col xs={12} className="">
              <Nav className="skills-nav" as="ul">
                {keySkillsMenu.map(item => (
                  <Nav.Item as="li" key={item.key}>
                    <Nav.Link
                      eventKey={item.key}
                      onClick={() => {
                        setSkill(null)
                        setType(item.key)
                      }}
                    >
                      {item.label}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
            <Col
              className={
                width <= 990 || isMobile
                  ? "right-container w-100 p-4"
                  : "right-container w-100"
              }
            >
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
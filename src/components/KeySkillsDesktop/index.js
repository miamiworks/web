import React,{useState} from "react";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Tab from "react-bootstrap/Tab"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import CourseCard from "../CourseCard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock } from "@fortawesome/free-regular-svg-icons"
import { faTimes } from "@fortawesome/pro-regular-svg-icons"
import "./style.scss"

function CourseSyllabusModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default function KeySkillsDesktop(props){
    const { keySkillsMenu, courseData, course, setCourse, setSkill,skill } = props
    const [modalShow, setModalShow] = useState(false)

    const getContent = ()=>{
      let content;
      if(skill !== null && course === null){
        content = (
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
                  onClick={() => setSkill("software-engineering")}
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
                  {getContent()}
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    )
}
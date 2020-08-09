import React from "react";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Nav from "react-bootstrap/Nav"
import Tab from "react-bootstrap/Tab"
import CourseCard from "../CourseCard"
import "./style.scss"

export default function KeySkillsDesktop(props){
    const { keySkillsMenu, courseData, setCourse, setSkill,skill } = props

    return (
      <Tab.Container
        id="skills-desktop"
        defaultActiveKey="software-engineering"
        className="key-skills-desktop"
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
                              value={item.id}
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
                            process of analyzing user requirements and then
                            designing, building, and testing software
                            application which will satisfy those requirements
                          </p>
                        </Col>
                      </Row>
                      <Row className="mb-4">
                        <Col>
                          <h4 className="title">What’s the job outlook?</h4>
                          <p>
                            process of analyzing user requirements and then
                            designing, building, and testing software
                            application which will satisfy those requirements
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
                  </Row>
                )}
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    )
}
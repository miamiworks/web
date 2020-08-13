import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock } from "@fortawesome/free-regular-svg-icons"
import { isMobile } from "react-device-detect"
import { useWindowSize } from "../../utils/hooks"
import FireImage from "../FireImage"
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import "./style.scss"

export default function CourseCard(props){
    const {topImgAlt,topImg,logo,title,timeframe,buttonText,setter,value,provider} = props;
    const [width, height] = useWindowSize()
    const getMobileContent = ()=>{
      return (
        <Row className="h-100 no-gutters">
          <Col xs={6} className="position-relative">
            <FireImage
              name={topImg}
              alt={topImgAlt ? topImgAlt : ""}
              className="h-100 card-img-top"
            />
            {/* <Card.Img
              className="h-100"
              variant="top"
              src={topImg}
              alt={topImgAlt ? topImgAlt : ""}
            /> */}
            <div className="text-overlay position-absolute">
              <Card.Title className="title text-white">{title}</Card.Title>
              <Card.Text className="text-white">
                <FontAwesomeIcon icon={faClock} className="mr-2" />
                {timeframe}
              </Card.Text>
            </div>
          </Col>
          <Col
            xs={6}
            className=" d-flex flex-column align-items-center justify-content-center"
          >
            <Card.Body>
              <Row className="h-100">
                <Col
                  xs={12}
                  className="logo-row d-flex flex-column align-items-center justify-content-center"
                >
                  <FireImage
                    name={logo}
                    alt={provider}
                    className="mb-2 skills-provider-logo"
                  />

                  <Button
                    variant="outline-primary purple"
                    onClick={() => setter(value)}
                    block
                  >
                    {buttonText}
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Col>
        </Row>
      )
    }

    const getDesktopContent = ()=>{
      return (
        <>
          <FireImage
            name={topImg}
            alt={topImgAlt ? topImgAlt : ""}
            className="h-50 card-img-top"
          />
          <Card.Body>
            <Row className="h-100">
              <Col
                xs={6}
                md={12}
                className="logo-row d-flex align-items-center"
              >
                <FireImage
                  name={logo}
                  alt={provider}
                  className="mb-2 skills-provider-logo"
                />
              </Col>
              <Col
                s={6}
                md={12}
                className="text-row d-flex flex-column justify-content-center"
              >
                <Card.Title className="title">{title}</Card.Title>
                <Card.Text className="purple">
                  <FontAwesomeIcon icon={faClock} className="mr-2" />
                  {timeframe}
                </Card.Text>
              </Col>
              <Col xs={12} className="button-row d-flex align-items-center">
                <Button
                  variant="outline-primary purple"
                  onClick={() => setter(value)}
                  block
                >
                  {buttonText}
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </>
      )
    }
    return (
      <Card
        className={
          width <= 990 || isMobile ? "course-card mobile h-100" : "course-card h-100"
        }
      >
        {width <= 990 || isMobile ? getMobileContent() : getDesktopContent()}
      </Card>
    )
}
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import {
  faClock
} from "@fortawesome/free-regular-svg-icons"
import "./style.scss"

export default function CourseCard(props){
    const {topImgAlt,topImg,logoSrc,title,timeframe,buttonText,setter,value} = props;

    return (
      <Card className="course-card h-100">
        <Card.Img
          className="h-50"
          variant="top"
          src={topImg}
          alt={topImgAlt ? topImgAlt : ""}
        />
        <Card.Body>
          <Row className="h-100">
            <Col xs={12} className="logo-row d-flex align-items-center">
              <img src={logoSrc} alt={topImgAlt + " logo"} className="" />
            </Col>
            <Col
              xs={12}
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
      </Card>
    )
}
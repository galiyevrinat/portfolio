import React from "react";
import { Col, Row } from "react-bootstrap";
import { Icon } from '@iconify/react';
import ubuntuIcon from '@iconify/icons-simple-icons/ubuntu';
import herokuIcon from '@iconify/icons-simple-icons/heroku';
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon={ubuntuIcon}/>
        <p style={{fontSize: "30px"}}>Ubuntu</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p style={{fontSize: "30px"}}>VSCode</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p style={{fontSize: "30px"}}>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
        <p style={{fontSize: "30px"}}>Slack</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon={herokuIcon}/>
        <p style={{fontSize: "30px"}}>Heroku</p>
      </Col>
    </Row>
  );
}

export default Toolstack;

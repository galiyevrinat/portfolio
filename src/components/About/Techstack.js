import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { Icon } from '@iconify/react';
import elixirIcon from '@iconify/icons-simple-icons/elixir';
import nextjsIcon from '@iconify/icons-simple-icons/nextdotjs';
import graphqlIcon from '@iconify/icons-simple-icons/graphql';
import awsIcon from '@iconify/icons-simple-icons/amazonaws';
import typescriptIcon from '@iconify/icons-simple-icons/typescript';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiAngularSimple,
  DiLaravel
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon={elixirIcon}/>
        <p style={{fontSize: "30px"}}>Elixir</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandGolang />
        <p style={{fontSize: "30px"}}>Golang</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p style={{fontSize: "30px"}}>Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={{fontSize: "30px"}}>Javascript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon={typescriptIcon}/>
        <p style={{fontSize: "30px"}}>Typescript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={{fontSize: "30px"}}>React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAngularSimple />
        <p style={{fontSize: "30px"}}>Angular</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon={nextjsIcon}/>
        <p style={{fontSize: "30px"}}>Next.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon={awsIcon}/>
        <p style={{fontSize: "30px"}}>AWS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon={graphqlIcon}/>
        <p style={{fontSize: "30px"}}>GraphQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p style={{fontSize: "30px"}}>MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p style={{fontSize: "30px"}}>Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <p style={{fontSize: "30px"}}>PostgreSql</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p style={{fontSize: "30px"}}>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <p style={{fontSize: "30px"}}>Java</p>
      </Col>
    </Row>
  );
}

export default Techstack;

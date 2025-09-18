import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/rb_2387.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">


              I fell in love with 
              <i>
                <b className="purple"> Engineering, Developing, Mentoring </b>
              </i>
              and through this journey, I've learned a lot (and I’m still learning! 🤷‍♂️).
              <br />
              <br /> I’m fluent in modern web technologies, including
              <i>
                <b className="purple"> Elixir, Node.js, JavaScript, TypeScript, React, Angular, and Next.js </b>
              </i>
              and proficient in cloud platforms like 
              <i>
                <b className="purple"> AWS and Azure.</b>
              </i>
              <br />I have deep expertise in full-stack development, working seamlessly across
              <i>
                <b className="purple"> MERN, MEAN stacks.</b>
              </i>
              <br />
              <br />
              My true passion lies in building &nbsp;
              <i>
                <b className="purple">high-impact web applications </b>
              </i>
              that make a difference.
              <br />
              <br />
              Whenever I can, I channel my enthusiasm into developing innovative products using
              with <b className="purple">Node.js, Elixir</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js, Angular, Vue and Next.js.</b>
              </i>
              <br/>
              <br/>
              I take pride in creating scalable, maintainable, and performance-driven solutions that push the boundaries of user experience and functionality
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              {/* <li className="social-icons">
                <a
                  href="https://github.com/tannermeng"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li> */}
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://t.me/snowman1019"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaTelegramPlane />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/keyon-elam-063809337/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li> */}
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

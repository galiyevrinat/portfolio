import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillPhone,
  AiFillMail,
  AiFillHome,
} from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer" style={{ 
      background: "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
      padding: "40px 0 20px 0",
      borderTop: "2px solid rgb(155 126 172)",
      position: "relative"
    }}>
      {/* Decorative top border */}
      <div style={{
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        height: "2px",
        background: "linear-gradient(90deg, transparent 0%, rgb(155 126 172) 50%, transparent 100%)"
      }}></div>
      
      <Container>
        <Row className="align-items-stretch" style={{ minHeight: "180px" }}>
          {/* Developer Section */}
          <Col lg="4" md="4" className="footer-section" style={{ marginBottom: "30px" }}>
            <div style={{ 
              padding: "20px",
              borderRadius: "10px",
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(155, 126, 172, 0.2)",
              height: "100%",
              display: "flex",
              flexDirection: "column"
            }}>
              <h4 style={{ 
                color: "rgb(155 126 172)", 
                fontSize: "1.1em", 
                marginBottom: "15px",
                fontWeight: "600",
                textTransform: "uppercase",
                letterSpacing: "1px"
              }}>
                💻 Developer
              </h4>
              <p style={{ 
                color: "#e0e0e0", 
                fontSize: "0.9em", 
                lineHeight: "1.6",
                margin: "0",
                flex: "1"
              }}>
                Designed and Developed by<br/>
                <strong style={{ color: "white" }}>Rinat Galiyev</strong>
              </p>
            </div>
          </Col>

          {/* Copyright Section */}
          <Col lg="4" md="4" className="footer-section" style={{ marginBottom: "30px" }}>
            <div style={{ 
              padding: "20px",
              borderRadius: "10px",
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(155, 126, 172, 0.2)",
              height: "100%",
              display: "flex",
              flexDirection: "column"
            }}>
              <h4 style={{ 
                color: "rgb(155 126 172)", 
                fontSize: "1.1em", 
                marginBottom: "15px",
                fontWeight: "600",
                textTransform: "uppercase",
                letterSpacing: "1px"
              }}>
                © Copyright
              </h4>
              <p style={{ 
                color: "#e0e0e0", 
                fontSize: "0.9em", 
                lineHeight: "1.6",
                margin: "0",
                flex: "1"
              }}>
                © {year} All rights reserved<br/>
                <strong style={{ color: "white" }}>Rinat Galiyev</strong>
              </p>
            </div>
          </Col>

          {/* Company & Contact Section */}
          <Col lg="4" md="4" className="footer-section" style={{ marginBottom: "30px" }}>
            <div style={{ 
              padding: "20px",
              borderRadius: "10px",
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(155, 126, 172, 0.2)",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center"
            }}>
              <h4 style={{ 
                color: "rgb(155 126 172)", 
                fontSize: "1.1em", 
                marginBottom: "20px",
                fontWeight: "600",
                textTransform: "uppercase",
                letterSpacing: "1px"
              }}>
                🏢 Company & Contact
              </h4>
              <div style={{ width: "100%" }}>
                <div style={{ marginBottom: "20px" }}>
                  <a 
                    href="https://arileus.ai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      color: "white",
                      textDecoration: "none",
                      fontSize: "1em",
                      fontWeight: "600",
                      display: "block",
                      marginBottom: "15px",
                      transition: "all 0.3s ease"
                    }}
                    onMouseOver={(e) => {
                      e.target.style.color = 'rgb(155 126 172)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.color = 'white';
                    }}
                  >
                    Arileus Intelligence Systems LLC
                  </a>
                </div>
                <div className="footer-contact-links">
                  <p style={{ 
                    color: "#e0e0e0", 
                    margin: "8px 0", 
                    fontSize: "0.9em",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <AiFillPhone style={{ 
                      marginRight: "10px", 
                      color: "rgb(155 126 172)",
                      fontSize: "1.1em"
                    }} />
                    <a 
                      href="tel:+17629207702" 
                      style={{ 
                        color: "#e0e0e0", 
                        textDecoration: "none",
                        transition: "color 0.3s ease"
                      }}
                      onMouseOver={(e) => e.target.style.color = 'white'}
                      onMouseOut={(e) => e.target.style.color = '#e0e0e0'}
                    >
                      +1 (762) 920-7702
                    </a>
                  </p>
                  <p style={{ 
                    color: "#e0e0e0", 
                    margin: "8px 0", 
                    fontSize: "0.9em",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <AiFillMail style={{ 
                      marginRight: "10px", 
                      color: "rgb(155 126 172)",
                      fontSize: "1.1em"
                    }} />
                    <a 
                      href="mailto:galiyev.2.pay@gmail.com" 
                      style={{ 
                        color: "#e0e0e0", 
                        textDecoration: "none",
                        transition: "color 0.3s ease"
                      }}
                      onMouseOver={(e) => e.target.style.color = 'white'}
                      onMouseOut={(e) => e.target.style.color = '#e0e0e0'}
                    >
                      galiyev.2.pay@gmail.com
                    </a>
                  </p>
                  <p style={{ 
                    color: "#e0e0e0", 
                    margin: "8px 0", 
                    fontSize: "0.9em",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    textAlign: "center"
                  }}>
                    <AiFillHome style={{ 
                      marginRight: "10px", 
                      color: "rgb(155 126 172)",
                      fontSize: "1.1em",
                      marginTop: "2px",
                      flexShrink: 0
                    }} />
                    <span style={{ 
                      color: "#e0e0e0", 
                      lineHeight: "1.4"
                    }}>
                      Ulitsa Maylina 17<br/>
                      Kostanay, 110000<br/>
                      Kazakhstan
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default Footer;

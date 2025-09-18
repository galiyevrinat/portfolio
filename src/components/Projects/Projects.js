import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import interactiveLearningPlatform from "../../Assets/Projects/Interactive Learning Platform.png";
import videoService from "../../Assets/Projects/VideoService.png";
import realtimeSportsBettingSite from "../../Assets/Projects/RealtimeSportsBettingSite.png";
import educationAssessmentTool from "../../Assets/Projects/EducationAssessmentTool.png";
import hadnmadegoods from "../../Assets/Projects/hadnmadegoods.png";
import travelBookingPlatformpng from "../../Assets/Projects/travelBookingPlatformpng.png";
import financialDashboard from "../../Assets/Projects/financialDashboard.png";
// import educationAssessmentTool from "../../Assets/Projects/EducationAssessmentTool.png";
// import educationAssessmentTool from "../../Assets/Projects/EducationAssessmentTool.png";
// import educationAssessmentTool from "../../Assets/Projects/EducationAssessmentTool.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={interactiveLearningPlatform}
              isBlog={false}
              title="Interactive Learning Platform"
              description="An online platform designed to enhance student learning through interactive content, quizzes, and real-time feedback to increase student participation."
              achievement="Led development that resulted in a 28% increase in student engagement within six months."
              demoLink="https://brilliant.org/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={videoService}
              isBlog={false}
              title="Subscription-Based Video Service"
              description="A scalable video streaming platform allowing users to access premium content via subscription, featuring reliable streaming and secure data storage."
              achievement="Enhanced platform scalability and reliability by leveraging Angular and Node.js, using AWS EC2 and S3 for hosting and storage."
              demoLink="https://www.muvi.com/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={educationAssessmentTool}
              isBlog={false}
              title="Educational Assessment Tool"
              description="A digital tool that facilitates educational assessments and tests, providing real-time scoring and analysis to improve learning outcomes."
              achievement="Improved system stability and user experience by resolving major slowdowns, ensuring smooth functionality during peak usage."
              demoLink="https://www.classtime.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={realtimeSportsBettingSite}
              isBlog={false}
              title="Real-Time Online Sports Betting Website"
              description="An online sports betting platform providing live updates, real-time data interaction, and engaging user experiences."
              achievement="Boosted user engagement and extended the average session duration by 15 minutes by using the MERN stack with real-time data capabilities."
              demoLink="https://sports.sportsinteraction.com/en-ca/sports"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hadnmadegoods}
              isBlog={false}
              title="Online Marketplace for Handmade Goods"
              description="A platform that allows artisans and small businesses to showcase and sell handmade products, with an emphasis on mobile usability and user engagement."
              achievement="Drove platform engagement, leading to 15,000 active sessions within six months and supported 1,000+ artisans."
              demoLink="https://www.uncommongoods.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travelBookingPlatformpng}
              isBlog={false}
              title="Travel Booking Platform and Event Management App"
              description="A comprehensive platform for booking travel accommodations and managing event tickets, featuring real-time data retrieval for a seamless experience."
              achievement="Improved page load times to under 1.5 seconds, boosting user interaction rates by 25%."
              demoLink="https://www.tiqets.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={financialDashboard}
              isBlog={false}
              title="Financial Dashboard for Small Businesses"
              description="A dashboard providing real-time financial data and insights to help small businesses monitor their financial health efficiently."
              achievement="Reduced data analysis time by 50%, enhancing workflow efficiency."
              demoLink="https://www.waveapps.com/"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  const experiences = [
    {
      company: "INTEGRA SOURCES",
      location: "Astana, Kazakhstan",
      period: "Feb 2020 – Jan 2025",
      title: "Senior Full Stack JavaScript & AI/ML Engineer",
      achievements: [
        "AI-Powered Predictive Lending Model: Implemented a real-time predictive lending model using Python, TensorFlow and Azure ML, reducing loan approval time by 25%.",
        "Regulatory Compliance & Risk Scoring Engine: Built a React.js with Typescript and Redux-based compliance dashboard for financial institutions, integrating D3.js and WebSockets to visualize real-time regulatory risk alerts and scoring. This reduced compliance breaches by 40%.",
        "AI-Driven Portfolio Risk Management: Led the development of a portfolio management platform using React.js for the front-end, with Python-based AI models (TensorFlow, Scikit-learn) for real-time risk analysis. Utilized Node.js, Nest.js, GraphQL APIs, MongoDB to integrate and visualize risk data, enhancing portfolio risk evaluation by 30%.",
        "AI-Powered Fraud Detection for Payment Transactions: Designed an AI-driven fraud detection system for real-time transaction analysis, leveraging Node.js (NestJS), Python (TensorFlow, Scikit-learn), and AWS SageMaker, increasing fraud detection accuracy by 35%.",
        "Microservices Architecture for Loan Processing: Migrated a legacy monolithic loan application system to a Node.js microservices-based architecture deployed on AWS Lambda, DynamoDB, and SNS/SQS, cutting response times by 50%.",
        "GraphQL-Powered Financial Data Aggregation Service: Developed an aggregated financial data API using GraphQL, Apollo Server, and Node.js, streamlining multi-bank data synchronization for fintech partners.",
        "Test-Driven Development (TDD): Integrated Jest and Mocha for backend API testing and Cypress/Enzyme for frontend UI testing, ensuring robust and reliable code with a test coverage rate of over 90%. Automated unit, integration, and UI tests using TDD principles to improve feature stability and catch defects early in the development cycle.",
        "Delivered containerized applications using Docker, significantly improving deployment efficiency.",
        "Enterprise Authentication & Role-Based Access Control (RBAC): Implemented OAuth 2.0, AWS Cognito, and IAM across all financial applications, ensuring HIPAA and PCI DSS compliance for secure transactions.",
        "Cloud-Native AI Deployment with Azure ML & FastAPI: Built a real-time predictive lending model using Azure Machine Learning, FastAPI, and PostgreSQL, improving loan approval efficiency by 25%.",
        "Angular-Based Portfolio Risk Management Platform: Led the development of an Angular and RxJS application for hedge funds, integrating GraphQL APIs to deliver real-time risk assessment insights, reducing risk evaluation delays by 30%."
      ]
    },
    {
      company: "Fora Soft",
      location: "Astana, Kazakhstan",
      period: "Feb 2017 – Jan 2020",
      title: "Full Stack JavaScript & Python Engineer",
      achievements: [
        "AI-Powered Patient Adherence Monitoring System: Built a medical adherence tracking system using Python (TensorFlow, Scikit-learn), AWS SageMaker, and FastAPI, which increased prescription adherence by 30%.",
        "EHR-Integrated Telemedicine Platform: Led the Angular and TypeScript redesign of Vyera's PatientConnect portal, improving usability and integrating FHIR APIs with Node.js for seamless EHR interoperability.",
        "Vue.js & React-Based Physician Analytics Dashboard: Developed a Vue.js and D3.js real-time patient analytics dashboard for physicians, integrating WebSockets and Redux to provide live updates on patient health trends.",
        "Node.js-Powered Prescription Processing System: Built Express.js-based microservices for automated prescription verification, utilizing PostgreSQL and Redis to reduce processing times by 45%.",
        "GraphQL API for Pharmaceutical Supply Chain: Designed a GraphQL API with Apollo Server and Node.js to optimize real-time drug inventory tracking, minimizing supply shortages by 20%.",
        "Azure Kubernetes-Powered Healthcare Data Pipelines: Developed Kubernetes (AKS) and Terraform infrastructure for secure patient data aggregation, ensuring compliance with HIPAA standards.",
        "Automated Medication Alerts with AWS Lambda: Created an event-driven medication reminder system using AWS Lambda, SNS, and DynamoDB, reducing missed doses by 35%.",
        "Full Stack Revamp of Patient Engagement Tools: Modernized React.js and Next.js patient engagement portals, integrating server-side rendering (SSR) for SEO and optimizing appointment scheduling workflows."
      ]
    },
    {
      company: "Logrus IT",
      location: "Almaty, Kazakhstan",
      period: "Jun 2012 – Jan 2017",
      title: "JavaScript Developer",
      achievements: [
        "React-Based PatientManager Platform: Developed React.js and Redux-based healthcare dashboards for Vyera's PatientManager system, enhancing data retrieval speeds by 40%.",
        "HIPAA-Compliant Authentication System: Designed a secure authentication and RBAC system using JWT, OAuth 2.0, and AWS Cognito, ensuring compliance for medical data access control.",
        "GraphQL API for Drug Research & Development: Built a GraphQL API with Node.js and Apollo Server to integrate clinical trial data with Vyera's research analytics platform, reducing data retrieval times by 35%.",
        "Angular-Based Pharmaceutical Inventory Tracking: Led the development of an Angular.js inventory tracking dashboard with D3.js visualizations, optimizing supply chain monitoring.",
        "Vue.js Admin Panel for Internal Drug Compliance Audits: Created a Vue.js-based compliance auditing tool that streamlined internal reporting and FDA regulatory checks.",
        "Optimized Healthcare Data Processing with AWS Lambda: Migrated legacy batch processing scripts to serverless AWS Lambda, reducing ETL pipeline execution time by 50%.",
        "Automated Medication Fulfillment with Node.js & DynamoDB: Developed an automated drug fulfillment system using Node.js (Express), AWS DynamoDB, and SNS, reducing prescription delays.",
        "Azure DevOps CI/CD Pipeline for Medical Applications: Implemented Azure DevOps and Docker-based CI/CD workflows, cutting deployment cycle time by 40%."
      ]
    }
  ];

  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Experience</strong>
        </h1>
        <p style={{ color: "white" }}>
          My work experience and achievements throughout my career.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {experiences.map((experience, index) => (
            <Col key={index} md={12} className="experience-card">
              <ExperienceCard {...experience} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Experience; 
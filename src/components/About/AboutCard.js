import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rinat Galiyev </span>
            from <span className="purple"> Kazakhstan.</span>
            <br />
            I am currently employed as a <span className="purple">Full Stack Engineer</span> at <span className="purple">Arileus Intelligence Systems LLC</span>.
            <br/>
            Visit our company website at <a href="https://arileus.ai" target="_blank" rel="noopener noreferrer" className="purple" style={{textDecoration: 'underline'}}>arileus.ai</a>.
            <br />
            I completed my <span className="purple">Bachelor of Science</span> in Computer Science at Satbayev University.
            <br />
            <br />
            <h1 style={{ fontSize: "1.1em", paddingBottom: "20px" }}>
            <strong className="">➡️ Why choose Me?</strong>
            </h1>
            I excel in developing scalable applications using <span className="purple">React, Angular, TypeScript, Node.js, Elixir, GraphQL, AWS, Azure</span> and modern frameworks, with a proven track record of boosting user engagement and performance. 
            <br/>
            <br/>
            My commitment to writing clean, maintainable code and mentoring teams has consistently driven success in high-paced environments.
          </p>
          <h1 style={{ textAlign: "justify", fontSize: "1.1em", paddingBottom: "20px" }}>
            <strong className="">➡️ Beyond coding, here's what fuels my creativity!</strong>
          </h1>
          <ul>
            <li className="about-activity">
            🎮 Playing Video Games – honing my problem-solving skills.
            </li>
            <li className="about-activity">
            ✍️ Writing Tech Blogs – sharing insights.
            </li>
            <li className="about-activity">
            🌍 Traveling – drawing inspiration.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!
            <br/>
            There's nothing impossible! 
            <br/>
            Everything is up to your willingness!"{" "}
          </p>
          <footer className="blockquote-footer">Rinat Galiyev</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

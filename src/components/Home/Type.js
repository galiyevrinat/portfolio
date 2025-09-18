import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Sr. Full Stack & AI/ML Engineer",
          "Python, React.js, Angular.js, Next.js, Golang, Node.js Developer",
          "MERN, MEAN Develooper",
          "AWS, Azure, Docker, Kubernetes, Terraform, CI/CD",
          "GraphQL, REST, WebSockets, Redis, PostgreSQL, MongoDB",
          "Microservices, API Design, Performance Optimization",
          "Agile, Scrum, Kanban, Pair Programming",
          "Team Leadership, Mentoring, Code Review",
          "Problem Solving, Debugging, Testing",
          "Continuous Learning, Innovation, Creativity",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

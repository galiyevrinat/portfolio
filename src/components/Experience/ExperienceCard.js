import React from "react";
import Card from "react-bootstrap/Card";
import { BsDot } from "react-icons/bs";

function ExperienceCard({ company, location, period, title, achievements }) {
  return (
    <Card className="experience-card-view">
      <Card.Body>
        <div className="experience-header">
          <h3 className="experience-company purple">{company}</h3>
          <div className="experience-details">
            <span className="experience-location">{location}</span>
            <span className="experience-period">{period}</span>
          </div>
        </div>
        <h4 className="experience-title">{title}</h4>
        <ul className="experience-achievements">
          {achievements.map((achievement, index) => (
            <li key={index} className="about-activity">
              <BsDot className="experience-bullet" /> {achievement}
            </li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard; 
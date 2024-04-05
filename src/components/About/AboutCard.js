import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Gudia Rani </span>
            from <span className="purple"> Jammu & Kashmir, India.</span>
            <br />
            I am currently an undergraduate at Army Institute Of Technology Pune.
            <br />
            I have completed my 10+2 from Shiksha Niketan School Jeevan Nagar Jammu.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Gardening
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Keep pushing through tough times to become better."{" "}
          </p>
          <footer className="blockquote-footer">Gudia</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

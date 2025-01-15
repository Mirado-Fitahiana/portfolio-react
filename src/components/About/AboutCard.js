import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour à tous, je suis <span className="purple">RAZAFINDRATANDRA Miradomahefa Fitahiana</span>,
            originaire de Antananarivo,<span className="purple"> Madagascar</span>.
            <br />
            Actuellement je suis Consultant-IT chez <span className="purple">BICI Madagascar</span>
            <br />
            J'ai fait mon parcours Universitaire à <span className="purple">IT University </span> Antananarivo ou j'ai obtenu mon diplôme de <span className="purple">Licence en Informatique</span>
            <br />
            <br />
            A part le développement, je suis aussi interéssé par 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Basket-Ball
            </li>
            <li className="about-activity">
              <ImPointRight /> Guitare
            </li>
            <li className="about-activity">
              <ImPointRight /> Natation
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            ""{"Créez des solutions qui transforment les idées en réalité ! "}
          </p>
          <footer className="blockquote-footer">Mirado</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

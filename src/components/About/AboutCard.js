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
            développeur Fullstack basé à <span className="purple">Antananarivo, Madagascar</span>.
            <br />
            Actuellement, je suis <span className="purple">Consultant IT chez BICI Madagascar</span>, où je
            conçois et développe des solutions web et des systèmes de gestion innovants.
            <br />
            J'ai obtenu ma <span className="purple">Licence en Informatique</span> à l'<span className="purple">IT University</span>
            d'Antananarivo, avec une spécialisation en développement logiciel.
            <br />
            <br />
            En dehors du développement, mes centres d'intérêt incluent :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Technologies émergentes et veille technologique
            </li>
            <li className="about-activity">
              <ImPointRight /> Basketball et sports d'équipe
            </li>
            <li className="about-activity">
              <ImPointRight /> Musique et guitare
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

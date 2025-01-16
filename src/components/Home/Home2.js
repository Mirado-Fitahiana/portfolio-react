import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillFacebook
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERMETTEZ-MOI DE ME <span className="purple"> PRÉSENTER </span>
            </h1>
            <p className="home-about-body">
              Avec une passion prononcée pour la technologie et le développement, je
              perfectionne mes compétences en tant que développeur Fullstack.
              <br />
              <br />Je suis compétent dans
              <i>
                <b className="purple"> Java, PHP, C#, JavaScript et C++.</b>
              </i>
              <br />
              <br />
              Mes domaines d’intérêt incluent la création et la maintenance
              d’ERP, de sites de back office et de front office
              <i>
                <b className="purple"> innovants et sur mesure </b>
              </i>
              ainsi que le développement de systèmes performants.
              <br />
              <br />
              J’ai une expérience significative avec des frameworks tels que
              <i>
                <b className="purple"> Laravel, Symfony, .NET, React.js et Vue.js</b>
              </i>
              , ainsi que dans la gestion de bases de données avec
              <i>
                <b className="purple"> MySQL, PostgreSQL et Oracle.</b>
              </i>
              <br />
              <br />
              Je suis toujours prêt à relever de nouveaux défis, notamment dans des
              domaines comme <b className="purple">l’automatisation</b> et
              <i>
                <b className="purple"> l’optimisation des systèmes.</b>
              </i>
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
            <h1>RETROUVEZ-MOI SUR</h1>
            <p>
              N’hésitez pas à <span className="purple">me contacter</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Mirado-Fitahiana/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/Mirado.fitahiana"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mirado-razafindratandra-55aa782a2/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
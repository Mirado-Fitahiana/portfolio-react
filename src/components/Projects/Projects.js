import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import react from "../../Assets/Projects/language/react.png";
import ionic from "../../Assets/Projects/language/ionic.png";
import java from "../../Assets/Projects/language/java.png";
import php from "../../Assets/Projects/language/php.png";
import python from "../../Assets/Projects/language/python.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes récents <strong className="purple">travails </strong>
        </h1>
        <p style={{ color: "white" }}>
        Voici quelques projets que j'ai accomplis récemment.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={java}
              isBlog={false}
              title="Automatisation Interface Swing"
              description="Développement d'un framework en Java permettant d'accélérer la création d'interfaces utilisateur (JPanel) avec tous ses composants (boutons, listes, champs de saisie), basé sur une approche 'Database First'."

              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={python}
              isBlog={false}
              title="BACK-OFFICE Mautourco"
              description="J'ai participé au développement du back-office de Mautourco avec Python et Django, en concevant des fonctionnalités pour la gestion des données et l'administration, tout en assurant une interface intuitive et un backend performant."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ionic}
              isBlog={false}
              title="Haona Soa"
              description="J'ai participé à la création d'une application mobile développée avec React-Ionic, intégrant des mini-jeux visant à sensibiliser et informer les femmes sur le changement climatique. "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={react}
              isBlog={false}
              title="Mon portfolio"
              description="J'ai créé mon portfolio avec React pour présenter mes réalisations et mon parcours professionnel, et je l'ai déployé sur Netlify."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={php}
              isBlog={false}
              title="Géstion Marathon"
              description="J'ai développé une application de gestion de course avec PHP/Laravel, couvrant tout le processus, de l'inscription des participants jusqu'à la publication des résultats. Ces derniers peuvent être triés par genre ou par tranche d'âge pour une meilleure organisation et analyse."
              ghLink="https://github.com/Mirado-Fitahiana/template_laravel"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

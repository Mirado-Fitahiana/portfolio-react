import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import react from "../../Assets/Projects/language/react.png";
import ionic from "../../Assets/Projects/language/ionic.png";
import java from "../../Assets/Projects/language/java.png";
import php from "../../Assets/Projects/language/php.png";
import python from "../../Assets/Projects/language/python.png";
// Utilisation d'images existantes pour les nouveaux projets
import csharp from "../../Assets/Projects/language/java.png"; // placeholder
import dotnet from "../../Assets/Projects/language/java.png"; // placeholder

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes récents <strong className="purple">travaux </strong>
        </h1>
        <p style={{ color: "white" }}>
        Voici quelques projets que j'ai accomplis récemment.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={python}
              isBlog={false}
              title="Plateforme Intelligente de Recrutement - Django/React"
              description="Plateforme d'aide au recrutement avec IA intégrée. Lecture automatisée de CV (PDF/DOCX) via Python et Gemini, génération d'offres d'emploi avec Anthropic Claude, interface bilingue avec i18n. Déploiement sur Vercel (React), Render (Django) et Supabase (PostgreSQL). Intégration de multiples IA : Gemini, OpenAI et Anthropic. Tests unitaires backend avec Docker et CI/CD."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={react}
              isBlog={false}
              title="Mautourco Mobile - Application Mobile"
              description="Application mobile Mautourco développée avec React Native{react}. Interface utilisateur moderne pour la gestion mobile des opérations touristiques, synchronisation en temps réel avec le backend Django, navigation intuitive et expérience utilisateur optimale sur iOS et Android."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={python}
              isBlog={false}
              title="Back-Office Mautourco"
              description="Développement du back-office de Mautourco avec Python et Django. Conception de fonctionnalités avancées pour la gestion des données, l'administration et le suivi des opérations, avec une interface intuitive et un backend hautement performant."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={react}
              isBlog={false}
              title="Haona Soa - Application Mobile"
              description="Application mobile développée avec React-Ionic intégrant des mini-jeux interactifs pour sensibiliser et informer les femmes sur le changement climatique. Interface engageante et expérience utilisateur optimisée pour l'impact social."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={react}
              isBlog={false}
              title="Portfolio Personnel React"
              description="Portfolio professionnel développé avec React.js présentant mes compétences, réalisations et parcours. Design moderne et responsive, déployé sur Netlify avec intégration continue."
              ghLink="https://github.com/Mirado-Fitahiana/portfolio-react"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={php}
              isBlog={false}
              title="Gestion de Marathon - Laravel"
              description="Application complète de gestion de courses développée avec PHP/Laravel. Gère l'ensemble du processus : inscription des participants, chronométrage, et publication des résultats avec filtres avancés par genre et catégorie d'âge. Architecture MVC et base de données optimisée."
              ghLink="https://github.com/Mirado-Fitahiana/template_laravel"
            />
          </Col>

       

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={java}
              isBlog={false}
              title="Framework Java Swing - Automatisation UI"
              description="Développement d'un framework Java innovant permettant la génération automatique d'interfaces utilisateur Swing (JPanel) avec tous leurs composants (boutons, listes, champs de saisie), basé sur une approche 'Database First'. Réduit considérablement le temps de développement des interfaces."
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

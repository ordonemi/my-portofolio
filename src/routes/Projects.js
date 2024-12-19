import React from 'react'
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import HeroImg2 from "../components/HeroImg2"
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  return (
    <div>
      <Navigation />
      <HeroImg2 heading="PROJECTS" text="Some of my most recent works"/>
      <ProjectCard title="Orbit Simulator" date="Jan. 2024 – Apr. 2024" description="Designed and implemented a satellite orbit simulator in C++ that modeled the physics of
space debris, satellite collisions, and navigation in space in a real-time graphical environment. Developed detailed UML class diagrams, structure charts, and pseudocode to outline the
object-oriented design of the various satellite systems." githubLink="https://github.com/"/>
      <ProjectCard title="Chess Game" date="Jan. 2024 – Apr. 2024" description="Designed and implemented an improved C++ chess simulator, that adhered to official chess rules, including castling, en passant, and pawn promotion. Enhanced the program’s functionality by adding optimizations contributing to the overall performance and accuracy of game mechanics." />
      <Footer />
    </div>
  )
}

export default Projects
import React from 'react'
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import HeroImg2 from "../components/HeroImg2"
import Resume from "../components/Resume"

const Experience = () => {
  return (
    <div>
      <Navigation />
      <HeroImg2 heading="EXPERIENCE" text="My Journey and Achievements" path="../images/experience-hero.webp"/>
      <Resume />
      <Footer />
    </div>
  )
}

export default Experience
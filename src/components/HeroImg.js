import "./HeroImgStyles.css"
import React from 'react'
import Hero from "../images/hero.webp"

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={ Hero } alt="IntroImg"/>
        </div>
        <div className="content">
            <p>Welcome to my digital portofolio</p>
        </div>
    </div>
  )
}

export default HeroImg
import React from 'react'
import "./ProfileCard.css"
import Headshot from "../images/headshot.png"
import { Link } from "react-router-dom"

function ProfileCard() {
  return (
    <div className='container'>
        <div className='profile-card'>
        <h1>Who am I?</h1>
            <div className='profile-picture'>
                <img src={ Headshot } alt='Emilio Ordonez' />
            </div>
            <div className='about-me'>
                <p>Hello, my name is Emilio Ordonez. Thank you for visiting my digital portfolio. I am currently pursuing a Bachelor of Science in Software Engineering, with an emphasis in both Software Design and Web Development, at Brigham Young University - Idaho. Here, you’ll find a showcase of the academic and personal projects I’ve undertaken, as well as an overview of my experience.</p>
            </div>
        </div>
        <div className='buttons'>
            <Link className='custom-btn btn-blue' to="/projects"><span>Projects</span></Link>
            <Link className='custom-btn btn-green' to="/experience"><span>Experience</span></Link>
        </div>
    </div>
  )
}

export default ProfileCard
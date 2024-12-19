import "./FooterStyles.css";
import { FaPhone, FaMailBulk, FaLinkedin } from 'react-icons/fa';

import React from 'react'

const Footer = () => {
  return (
    <div className="Footer">
        <div className="footer-container">
            <div className="left">
                <div className="phone">
                    <h4><FaPhone size={20} style={{ color: "white", marginRight: "1rem" }} />1-832-392-5410</h4>            
                </div>
                <div className="mail">
                    <h4><FaMailBulk size={20} style={{ color: "white", marginRight: "1rem" }} />emilioordgue23@gmail.com</h4>            
                </div>
                <div className="linkedin">
                    <h4><FaLinkedin size={20} style={{ color: "white", marginRight: "1rem" }} />emilio-ordonez-guerrero</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
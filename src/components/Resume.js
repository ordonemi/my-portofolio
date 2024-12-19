import React, { useEffect } from "react";
import "./ResumeStyles.css";

const Resume = () => {
  useEffect(() => {
    const coll = document.getElementsByClassName("collapsible");

    const handleClick = function() {
      this.classList.toggle("active");
      const content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    };

    for (let i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", handleClick);
    }

    return () => {
      for (let i = 0; i < coll.length; i++) {
        coll[i].removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <div className="resume-container">
      <button className="collapsible">Web Development Teaching Assistant</button>
      <div className="collapsible-content" style={{ display: "none" }}>
        <h4>Brigham Young University-Idaho</h4>
        <h4>Sept. 2024 - Present</h4>
        <ul>
          <li>Guided two sections of approximately 30 students each through foundational web development concepts, including introducing HTML and CSS.</li>
          <li>Provided personalized support to over 60 students during class and office hours, addressing coding challenges and debugging issues.</li>
          <li>Collaborated with faculty to grade weekly assignments, ensuring timely feedback and promoting the success of students in the classroom.</li>
        </ul>
      </div>
      <div className="spacer"></div>
      <button className="collapsible">Teaching Assistant</button>
      <div className="collapsible-content" style={{ display: "none" }}>
        <h4>Kumon of The Woodlands-Alden Bridge</h4>
        <h4>Feb. 2023-Present</h4>
        <ul>
          <li>Provided personalized instruction to around 30 students per week in math and reading based on the Kumon method.</li>
          <li>Created a supportive and motivating learning environment in the new implementation of Kumon Connect for over 100 students, while adhering to Kumon’s guidelines.</li>
          <li>Assessed, monitored, and tracked the progress of over 100 students through daily observations, utilizing Kumon’s student management software to ensure personalized learning and development.</li>
        </ul>
      </div>

    </div>
  );
};

export default Resume;
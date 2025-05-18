import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'; // Import the file/document icon
import '../assets/styles/About.scss';

function About() {
    return (
        <div className="container" id="about">
            <div className="about-container">
                <h1>About Me</h1>
                <p>
                    Hi! My name is Khang (Peter), a tech enthusiast with a multidisciplinary background spanning full stack development, data science, and generative AI applications. 
                    Deep interest in building systems that leverage AI to solve real-world challenges while maintaining clean, scalable software infrastructure. 
                    Passionate about designing user-centric products that integrate intelligent automation, natural language processing, and computer vision to enhance decision-making and operational efficiency. 
                    Experienced in working across the GenAI pipeline and deployment using tools like Python, JavaScript, PyTorch, TensorFlow, and cloud platforms. 
                    Skilled in translating complex technical concepts into practical solutions. Always eager to collaborate, learn, and innovate at the intersection of machine learning and software engineering.
                </p>
                <div className="resume-section">
                    <FontAwesomeIcon icon={faFileAlt} size="lg" /> {/* Document icon */}
                    <a href="https://drive.google.com/file/d/1D7ZtgiV6HTlHP90AIwoZmlpJ-N4Q_Ijn/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
                </div>
            </div>
        </div>
    );
}

export default About;

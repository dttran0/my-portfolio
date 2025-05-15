import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faRobot } from "@fortawesome/free-solid-svg-icons";

const labelsFirst = [
    "Python",
    "C++",
    "Java",
    "Node.js",
    "React",
    "TypeScript",
    "JavaScript",
    "HTML",
    "C#",
    "C",
    "Swift",
    "Flask",

];

const labelsSecond = [
    "R",
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure",
    "Linux",
    "Snowflake",
    "Pandas/Numpy",
    "SQL",
    "PostgreSQL",
    "MongoDB",
    "Hadoop",
    "Spark",
    "Databricks",
    "Docker/Kubernetes",
    "Terraform",
    "Jenkins",
    "Prometheus/Ghafana",
    "Power BI",
    "Tableau",
];

const labelsThird = [
    "OpenAI",
    "Gemini",
    "LangChain",
    "Hugging Face",
    "PyTorch",
    "TensorFlow",
    "Computer Vision",
    "Natural Language Processing",
    "Machine Learning",
    "Large Language Models",
    "Jupyter Notebook",
    "Scikit-learn"

];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Software Development</h3>
                    <p>I have built a diverse array of web applications from scratch using modern technologies such as React and Flask. Strong proficiency in frontend + backend development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Data & DevOps Automation</h3>
                    <p>Experienced in analyzing data through statistical analysis, implementing automated data and CI/CD pipelines, and deployment automation to support the successful through containerization.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faRobot} size="3x"/>
                    <h3>AI/ML</h3>
                    <p>Leveraging multiple AI projects ranging from machine leanring, computer vision to LLM. Have professional experience building enterprise grade GenAI-enabled solutions to empower intelligent decision making.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
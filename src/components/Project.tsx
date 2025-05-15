import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import beacondaid from '../assets/images/BeaconAid Thumbnail.png';
import nyc_transport from '../assets/images/nyc_transportation.jpg';
import '../assets/styles/Project.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <div className="project-image-container">
                    <img src={mock10} className="zoom project-image" alt="TrueTalent AI interviewing platform" />
                </div>
                <h2>TrueTalent | LA Hacks</h2>
                <p>AI-powered technical interviewing platform enhanced with multi-modal AI to detect potential cheating during interviews. It analyzes video, audio, and code data streams in real time—tracking eye movements, posture, and speech patterns—to flag suspicious behavior and assess candidate authenticity. It also evaluates code for AI-generated traits and possible plagiarism, helping interviewers ensure a fair and accurate assessment.</p>
                <div className="button-group">
                    <a href="https://github.com/DiAndyW/TrueTalent-LAHacks-25" target="_blank" rel="noreferrer" className="project-button">Code</a>
                    <a href="https://youtu.be/SaCIiIvirLw" target="_blank" rel="noreferrer" className="project-button">Demo</a>
                </div>
            </div>
            <div className="project">
                <div className="project-image-container">
                    <img src={beacondaid} className="zoom project-image" alt="BeaconAid disaster response app" />
                </div>
                <h2>Beacon Aid | IrvineHacks</h2>
                <p>Flutter-based disaster response app that uses geolocation and real-time data from the National Weather Service to map nearby natural disasters and essential resource centers. Users can view distances to danger zones, needed supplies, and available aid at shelters or hospitals. The app also encourages community engagement by rewarding users for volunteering efforts.</p>
                <div className="button-group">
                    <a href="https://github.com/dttran0/disaster-resources-app" target="_blank" rel="noreferrer" className="project-button">Code</a>
                    <a href="https://youtu.be/XXWv4sPU1bI" target="_blank" rel="noreferrer" className="project-button">Demo</a>
                </div>
            </div>
            <div className="project">
                <div className="project-image-container">
                    <img src={mock08} className="zoom project-image" alt="EcoTrack sustainable practices app" />
                </div>
                <h2>EcoTrack | USC Hackathon 
                    <FontAwesomeIcon icon={faTrophy} style={{ color: '#FFD700', marginLeft: '8px' }} />
                    <span style={{ fontWeight: 'bold', color: '#FFD700' }}>1st Place</span>
                </h2>
                <p>EcoTracker is a gamified mobile application designed to encourage sustainable practices through fun challenges and rewards, providing interactive experience that combines environmental education with fun, actionable steps toward sustainability.</p>
                <div className="button-group">
                    <a href="https://github.com/OppedRawen/Eco-Friendly-App" target="_blank" rel="noreferrer" className="project-button">Code</a>
                    <a href="https://www.youtube.com/watch?v=w6WsoTyuLu0" target="_blank" rel="noreferrer" className="project-button">Demo</a>
                </div>
            </div>
            <div className="project">
                <div className="project-image-container">
                <img src={nyc_transport} className="zoom project-image" alt="NYC transportation and pollution data visualization" />
                </div>
                <p>Comprehensive data science pipeline to explores the link between New York City's multimodal transportation systems—traffic, transit, biking, and walking—and air pollution levels, focusing on Nitric Oxide (NO) and PM2.5. Using geospatial and health data, it aims to identify how pollution disparities correlate with asthma rates and hospitalizations across different NYC neighborhoods.</p>
                <div className="button-group">
                    <a href="https://sites.google.com/uci.edu/ds-capstone-2025/home" target="_blank" rel="noreferrer" className="project-button">Website</a>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Project;
import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

import intelLogo from '../assets/images/intel_logo (2).png';
import siemensLogo from '../assets/images/Siemens_AG_logo.png';
import lbnlLogo from '../assets/images/Berkeley_lab_logo.png';

function Timeline() {
  return (
    <div id="history" className="timeline-section">
      <div className="items-container">
        <h1>Experiences</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work intel-element"
            contentStyle={{ 
              background: 'rgba(255, 255, 255, 0.85)', 
              backgroundImage: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8ef 100%)',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
              border: '1px solid rgba(80, 0, 202, 0.2)',
              borderLeft: '4px solid #0071c5' // Intel blue color accent
            }}
            contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.85)' }}
            date="May 2025 - Present"
            iconStyle={{ background: '#5000ca', color: '#fff', boxShadow: '0 0 0 4px #e4e8ef, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <div className="company-header">
              <img src={intelLogo} alt="Intel" className="company-logo" />
              <div>
                <h3 className="vertical-timeline-element-title">Intel Corporation</h3>
                <h4 className="vertical-timeline-element-subtitle">Software Engineer Intern</h4>
              </div>
            </div>
            <ul className="experience-list">
              <li>Full-stack Software Development</li>
              <li>Built a scalable AI chatbot for Intel Foundry using Python, JavaScript, and LLMs for customer-focused interactions</li>
              <li>Contributed to backend development using Ruby on Rails to support scalable infrastructure</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work siemens-element"
            contentStyle={{ 
              background: 'rgba(255, 255, 255, 0.85)', 
              backgroundImage: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8ef 100%)',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
              border: '1px solid rgba(80, 0, 202, 0.2)',
              borderLeft: '4px solid #009999' // Siemens teal color accent
            }}
            contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.85)' }}
            date="May 2024 - April 2025"
            iconStyle={{ background: '#5000ca', color: '#fff', boxShadow: '0 0 0 4px #e4e8ef, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <div className="company-header">
              <img src={siemensLogo} alt="Siemens" className="company-logo" />
              <div>
                <h3 className="vertical-timeline-element-title">Siemens Digital Industries Software</h3>
              </div>
            </div>
            <div className="role-container">
              <h4 className="vertical-timeline-element-subtitle">Software Engineer Intern - Industries Solution Teams</h4>
              <ul className="experience-list">
                <li>Built and optimized RAG-based AI data pipelines, improving data processing by 20% and prototyped 3D-Meshing AI-Agent (Llama-Mesh) with TensorFlow on 50+ Siemens CAD objects.</li>
                <li>Engineered an ETL pipeline with ML clustering (83% accuracy) to categorize customer requests and enhance data usability.</li>
                <li>Supported code reviews and implemented regression tests, increasing workflow efficiency by 15% for project managers and stakeholders</li>
              </ul>
            </div>
            <div className="role-container">
              <h4 className="vertical-timeline-element-subtitle">Data Engineer Intern - Software Localization Teams</h4>
              <ul className="experience-list">
                <li>Built RAG-based automation for multilingual Oracle data, boosting AI accuracy to 85%.</li>
                <li>Optimized Siemens translation ETL with Java & Azure OpenAI, cutting validation time by 20%.</li>
                <li>Streamlined multilingual QA with scalable AI workflows and REST API integration</li>
              </ul>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work lbnl-element"
            contentStyle={{ 
              background: 'rgba(255, 255, 255, 0.85)', 
              backgroundImage: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8ef 100%)',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
              border: '1px solid rgba(80, 0, 202, 0.2)',
              borderLeft: '4px solid #00323c' // Berkeley Lab blue color accent
            }}
            contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.85)' }}
            date="September 2023 - December 2023"
            iconStyle={{ background: '#5000ca', color: '#fff', boxShadow: '0 0 0 4px #e4e8ef, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <div className="company-header">
              <img src={lbnlLogo} alt="LBNL" className="company-logo" />
              <div>
                <h3 className="vertical-timeline-element-title">Lawrence Berkeley National Laboratory</h3>
                <h4 className="vertical-timeline-element-subtitle">Machine Learning Engineer Intern</h4>
              </div>
            </div>
            <ul className="experience-list">
              <li>Built a self-supervised depth model using MiDAS and Depth-Anything, achieving 81% validation accuracy</li>
              <li>Developed Dockerized pipelines for high-dimensional LiDAR data with unit-tested reliability</li>
              <li>Engineered scalable, portable vision solutions for urban traffic depth estimation</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
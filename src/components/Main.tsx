import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profileImage from '../assets/images/profile_image.jpg';
import profileImage2 from '../assets/images/profile_image2.png';
import profileImage3 from '../assets/images/profile_image3.png';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img
          src={profileImage3}
          alt="Full Image"
        />

        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/dttran0" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/khang-duc-tran/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Khang Duc Tran</h1>

          <div className="mobile_social_icons">
            <a href="https://github.com/dttran0" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/khang-duc-tran/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
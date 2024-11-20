import React from 'react';
import './ProfileCard.css'; // Import custom CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons

// Import your profile image
import profileImage from './me.jpg.jpg';

function ProfileCard() {
  return (
    <div className="profile-card">
      <img
        className="profile-image"
        src={profileImage}
        alt="Profile"
      />
      <h2 className="profile-name">Praveena V</h2>
      <p className="profile-title">Software Developer</p>
      <p className="profile-description">
        Passionate about coding, problem-solving, and creating innovative software solutions. Experienced in JavaScript, React, and backend development.
      </p>

      {/* Skills Section */}
      <div className="skills-section mt-3">
        <h5 className="skills-title">Skills</h5>
        <div className="skills-buttons">
          <button type="button" className="btn btn-white m-1">Python</button>
          <button type="button" className="btn btn-white m-1">Java</button>
          <button type="button" className="btn btn-white m-1">React</button>
          <button type="button" className="btn btn-white m-1">JavaScript</button>
          <button type="button" className="btn btn-white m-1">HTML & CSS</button>
        </div>
      </div>

      {/* Contact Button */}
      <a href="mailto:your-email@example.com" className="btn btn-primary mb-3">
        Contact
      </a>

      {/* Social Links Section */}
      <div className="social-links">
        <a
          href="mailto:your-email@example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-link"
        >
          <i className="bi bi-envelope"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-link"
        >
          <i className="bi bi-linkedin"></i>
        </a>
        <a
          href="https://www.instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-link"
        >
          <i className="bi bi-instagram"></i>
        </a>
      </div>
    </div>
  );
}

export default ProfileCard;

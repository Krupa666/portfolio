import React, { useState } from "react";
import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Education } from "./components/Hero/Education";
import { Projects } from "./components/Projects/Projects";
import excelr from './components/cert/excelr.jpg';
import de from './components/cert/aws.png';
import cloud from './components/cert/aws2.jpg';
 
// Modal Component
const ImageModal = ({ image, onClose }) => {
  return (
    <div style={modalStyles}>
      <span onClick={onClose} style={closeButtonStyles}></span>
      <img src={image} alt="Certification" style={modalImageStyles} />
    </div>
  );
};

// Certifications Component
const Certifications = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const certifications = [
    {
      title: 'DataScience & ML',
      issuer: 'Excelr',
      date: 'August 2024',
      image: excelr, // Adjust the path as needed
    },
    {
      title: 'AWS Cloud ',
      issuer: 'AWS Academy',
      date: 'March 2024',
      image: cloud,
    },
    {
      title: 'Data Engineering Certification',
      issuer: 'AWS Academy',
      date: 'July 2024',
      image: de, // Adjust the path as needed
    },
    // Add more certifications as needed
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <section id="certifications">
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1.5rem" }}>
        {certifications.map((cert, index) => (
          <div
            key={index}
            style={{
              backgroundImage: "linear-gradient(90deg, rgba(165, 215, 232, 0.42) 0%, rgba(255, 255, 255, 0) 100%)",
              textAlign: "center",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              width: "280px",
              padding: "1rem",
              transition: "transform 0.2s, box-shadow 0.2s",
              cursor: "pointer",
            }}
            onClick={() => openModal(cert.image)}
          >
            <img
              src={cert.image}
              alt={`${cert.title} logo`}
              style={{
                width: "100%",
                height: "160px",
                objectFit: "cover",
                borderRadius: "6px",
                marginBottom: "1rem",
              }}
            />
            <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "0.5rem", color: "#222" }}>
              {cert.title}
            </h3>
            <p style={{ fontSize: "1rem", color: "#555", marginBottom: "0.5rem" }}>{cert.issuer}</p>
            <p style={{ fontSize: "0.9rem", color: "#777", fontStyle: "italic" }}>{cert.date}</p>
          </div>
        ))}
      </div>

      {isOpen && <ImageModal image={selectedImage} onClose={closeModal} />}
    </section>
  );
};

// Main App Component
function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education /> 
      <Projects />  
      <Certifications /> 
      
      <Contact />
    </div>
  );
}

// Styles for the modal
const modalStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const modalImageStyles = {
  maxWidth: '90%',
  maxHeight: '90%',
};

const closeButtonStyles = {
  position: 'absolute',
  top: '20px',
  right: '30px',
  color: 'white',
  fontSize: '24px',
  cursor: 'pointer',
};

export default App;
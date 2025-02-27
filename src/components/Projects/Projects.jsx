import React from "react";
import img from './req.jpg'; 
import rec from './nec.jpg';
import "../../vars.css";

export const Projects = () => {
  // Projects data
  const Projectsme = [
    {
      name: "Weather App",
      description: "A weather forecast app using OpenWeatherMap API.",
      link: "https://github.com/Krupa666/Simple-Weather-Apk.git",
      image: img, // Add image property
    },
    {
      name: "Random Quote",
      description: "A random Quote Generator",
      link: "https://github.com/Krupa666/RandomQuote.git",
      image: rec, // Use a placeholder image or another image
    },
  ];

  // Inline styles
  const styles = {
    container: {
      padding: "2rem",
      backgroundColor: "#c98763",
    },
    heading: {
      fontSize: "2rem",
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: "2rem",
      color: "#fff",
    },
    card: {
        backgroundColor: "rgba(12, 12, 12, 0.6)",
        borderRadius: "1rem",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        padding: "1.5rem",
        textAlign: "center",
        transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
        width: "45%", // Ensure cards take equal space
        margin: "0", // Remove extra margins
        flexShrink: "0", // Prevent shrinking of cards
      },
    grid: {
        display: "flex", // Use flexbox for row alignment
        justifyContent: "space-between", // Distribute cards evenly
        alignItems: "flex-start", // Align cards at the top
        flexWrap: "nowrap", // Prevent wrapping to the next line
        gap: "0", // Remove gaps
        padding: "0",
      },
    cardTitle: {
      fontSize: "1.25rem",
      fontWeight: "600",
      marginBottom: "0.5rem",
      color: "#9bb832",
    },
    cardDescription: {
      fontSize: "1rem",
      color: "#fff",
      marginBottom: "1rem",
      lineHeight: "1.5",
    },
    cardLink: {
      fontSize: "1rem",
      fontWeight: "500",
      color: "#3498db",
      textDecoration: "none",
    },
    cardLinkHover: {
      textDecoration: "underline",
    },
    image: {
        width: "30%", // Reduce the width to 80% of the card's width
        height: "auto", // Maintain aspect ratio
        borderRadius: "0.5rem",
        marginBottom: "0",
        objectFit: "cover", // Ensure the image scales well
      },
  
  };

  return (
    <section id="projects" style={styles.container}>
      <h2 style={styles.heading}>My Projects</h2><br></br><br></br>
      <div style={styles.grid}>
        {Projectsme.map((project, index) => (
          <div
            key={index}
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
            }}
          >
            {/* Add Image */}
            {project.image && (
              <img src={project.image} alt={project.name} style={styles.image} />
            )}
            <h3 style={styles.cardTitle}>{project.name}</h3>
            <p style={styles.cardDescription}>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.cardLink}
              onMouseEnter={(e) =>
                (e.currentTarget.style.textDecoration = "underline")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.textDecoration = "none")
              }
            >
              View Project
            </a>
            <br></br><br></br>
          </div>
          
        ))}
      </div>
      <br></br><br></br>
      <h2 style={styles.heading}>Certifications</h2><br></br><br></br>
    </section>
  );
};


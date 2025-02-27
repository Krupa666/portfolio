import React from "react";

export const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "Sasi Institute of Technology and Engineering",
      date: "2022 - 2026",
      description: "Specialized in Web Development and Machine Learning.",
    },
    {
      degree: "Intermediate Course",
      institution: "Aditya Junior College",
      date: "2020 - 2022",
      description: "Focused on Mathematics.",
    },
    {
      degree: "SSC",
      institution: "Narayana E. M. School",
      date: "2007 - 2020",
      description: "",
    },
  ];

  const styles = {
    container: {
      padding: "2rem",
      backgroundColor: "#c98763", // Light gray background
      display: "flex",
      flexDirection: "column",
      alignItems: "center", // Center horizontally
      justifyContent: "center", // Center vertically
      minHeight: "100vh", // Full viewport height
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: "2rem",
      color: "#fff", // Darker gray for the title
    },
    education: {
      width: "100%",
      maxWidth: "800px", // Restrict content width
      display: "flex",
      flexDirection: "column",
      gap: "2rem", // Space between cards
    },
    card: {
      backgroundColor: "rgba(12, 12, 12, 0.6)", // White background for cards
      borderRadius: "1rem", // Rounded corners
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
      padding: "1.5rem",
      transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
    },
    cardHover: {
      transform: "translateY(-5px)", // Lift card on hover
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)", // Stronger shadow
    },
    cardTitle: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      marginBottom: "0.5rem",
      color: "#fff", // Unified dark gray color
    },
    institution: {
      fontSize: "1.25rem",
      fontWeight: "600",
      color: "#3498db", // Blue for institution
    },
    date: {
      fontSize: "1rem",
      color: "#7f8c8d", // Muted gray for dates
      fontStyle: "italic",
    },
    description: {
      fontSize: "1rem",
      color: "#7f8c8d", // Same dark gray as before
      lineHeight: "1.5",
      marginTop: "0.5rem",
    },
    separator: {
      marginTop: "1rem",
      border: "none",
      borderTop: "1px solid #dfe6e9", // Light gray separator
    },
  };

  return (
    <section style={styles.container} id="education">
      <h2 style={styles.title}>Education</h2>
      <div style={styles.education}>
        <ul>
          {education.map((edu, index) => (
            <li
              key={index}
              style={styles.card}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = styles.cardHover.transform;
                e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              <h3 style={styles.cardTitle}>{edu.degree}</h3>
              <p style={styles.institution}>{edu.institution}</p>
              <p style={styles.date}>{edu.date}</p>
              <p style={styles.description}>{edu.description}</p>
              <hr style={styles.separator} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

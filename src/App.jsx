import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Education } from "./components/Education/Education.jsx"; // Import the Education component
import { Projects } from "./components/Projects/Projects";
import { Certifications } from "./components/Certifications/Certifications";
import { Contact } from "./components/Contact/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education /> {/* Use the Education component */}
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import '../index.css';
import Navbar from "../components/Navbar";
import Tilt from 'react-parallax-tilt';
import { Link } from 'react-router-dom';
import Footer from "../components/Footer";

const heroData = [
  {
    title: "Education",
    items: [
      "SMP Negeri 12 Bandung, 2017–2020",
      "SMA Negeri 15 Bandung, 2020–2023",
      "Informatics, ITENAS, 2023-Present"
    ]
  },
  {
    title: "Skills",
    items: ["JavaScript", "React", "Python", "UI/UX Design"]
  },
  {
    title: "Organization",
    items: [
      "HMIF, BE, Staff Media & Publikasi, 2024",
      "HMIF, BPA, Staff Komisi 3, 2024-Present",
      "AIESEC, Marketing Engagement, 2025-Present"
    ]
  },
  {
    title: "Tools",
    items: ["VSCode", "PyCharm", "Figma"]
  }
];

const HeroCard = ({ title, items }) => (
  <Tilt glareEnable={true} glareMaxOpacity={0.3} scale={1.05}>
    <div className="hero-card">
      <h2>{title}</h2>
      <ul className="education-list">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  </Tilt>
);

const Home = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <div className="home-container">
      <Navbar />

      <section id="home" className="home">
        <header className="header-image">
          <img src="./src/assets/Frame 1.png" alt="Header" />
        </header>
      </section>

      <section id="about" className="about">
        <div className="about-content">
          <h2>About Me</h2>
          <p className="intro-text">
            I'm <span className="highlight-name">Khoerunnisa Somawijaya</span> but people call me by <span className="highlight-nickname">Khai</span>,
            my student ID is <span className="highlight-id">152023096</span>, I am an undergraduate Informatics student at
            <span className="highlight-campus"> Institut Teknologi Nasional Bandung (ITENAS)</span> who loves learning and creating innovative solutions.
            With a passion for IT and design, I aim to build meaningful products that make a difference.
          </p>
          {showMore && (
            <p className="intro-text">
              In addition to my academic journey, I actively participate in student organizations and enjoy exploring new creative and technical skills outside the classroom.
            </p>
          )}
          <button className="button-style" onClick={toggleShowMore}>
            {showMore ? 'Show Less' : 'Show More'}
          </button>
        </div>
        <div className="hero-image">
          <img src="./src/assets/Group 1.png" alt="Your photo" />
        </div>
      </section>

      <section className="hero">
        <div className="hero-grid">
          {heroData.map((card, index) => (
            <HeroCard key={index} title={card.title} items={card.items} />
          ))}
        </div>
      </section>

      <section id="project" className="project">
        <h2 className="project-header">My Project</h2>
        <div className="single-project-card">
          <div className="project-card-content">
            <h3>Some of My Projects</h3>
            <p>
              Explore a selection of projects I've worked on — from educational apps to interactive platforms designed to solve real-world problems.
            </p>
            <Link to="/projects" className="button-style">Discover More</Link>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-cards">
        <div className="contact-header">
          <h2>Contact Me</h2>
          <p>If you'd like to collaborate or have any questions, feel free to reach out!</p>
        </div>

        <div className="contact-grid">
          {[
            {
              title: "Email",
              href: "mailto:khoerunnisa.somawijaya@mhs.itenas.ac.id",
              icon: "./src/assets/emaill.png",
              text: "khoerunnisa.somawijaya@mhs.itenas.ac.id"
            },
            {
              title: "LinkedIn",
              href: "https://linkedin.com/in/khoerunnisasomawijaya",
              icon: "./src/assets/linkedin.png",
              text: "linkedin.com/in/khoerunnisasomawijaya"
            },
            {
              title: "GitHub",
              href: "https://github.com/khoerunnisasw",
              icon: "./src/assets/github.png",
              text: "github.com/khoerunnisasw"
            },
            {
              title: "Instagram",
              href: "https://instagram.com/khoerunnisasw",
              icon: "./src/assets/ig.png",
              text: "@khoerunnisasw"
            }
          ].map((contact, index) => (
            <div key={index} className="contact-card">
              <img src={contact.icon} alt={`${contact.title} Logo`} className="contact-logo" />
              <h3>{contact.title}</h3>
              <a href={contact.href} target="_blank" rel="noopener noreferrer">
                {contact.text}
              </a>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
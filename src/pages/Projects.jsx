import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import '../projects.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const projects = [
  {
    title: 'UI/UX Design: Cafe Quest',
    description: 'A web app that helps users find the best cafes nearby with reviews and directions.',
    image: './src/assets/cafequest.jpg',
    link: 'https://www.figma.com/proto/kYnvkXebvTZDQ0B8RkWkxo/Untitled?page-id=0%3A1&node-id=8-68&p=f&viewport=172%2C229%2C0.14&t=XyJ0GafpCr9yQEgl-1&scaling=scale-down&content-scaling=fixed'
  },
  {
    title: 'Database Website: Flower Fever',
    description: 'Database Website with interactive and responsive design.',
    image: './src/assets/pj1.png',
    link: 'https://drive.google.com/file/d/18gZ4lSAygcz0lU-VPHoeTr5vAuBe9y1G/view?usp=sharing'
  },
  {
    title: 'ERBD Initiatives x Apple Developer Academy Feeds Design (AIESEC)',
    description: 'An informative feeds design for ERBD Initiatives x Apple Developer Academy.',
    image: './src/assets/pj2.png',
    link: 'https://www.figma.com/proto/SRrYsgX7o1H5kmXqqqxETl/Untitled?page-id=0%3A1&node-id=1-3252&p=f&viewport=52%2C202%2C0.13&t=A2uQNAENhimt6DGZ-1&scaling=min-zoom&content-scaling=fixed'
  },
  {
    title: 'Prototype RC Car',
    description: 'Prototype of an RC Car using an ultrasonic and LDR sensor.',
    image: './src/assets/pj3.jpg',
    link: 'https://photos.app.goo.gl/WKjtoRjN5yyjwM3K8'
  },
  {
    title: 'Portfolio Website',
    description: 'My own personal portfolio to showcase my projects and skills with a modern design.',
    image: './src/assets/pj4.png',
    link: ''
  }
];

const Projects = () => {
  return (
    <div className="home-container">
      <Navbar />

      <section className="project-section">
        <h2 className="project-title">My Projects</h2>
        <p className="project-intro">
            Welcome to my project showcase — a curated collection of works that reflect my passion for technology, design, and creative problem-solving. 
            <br /><br />
            Each project represents a journey of continuous learning and exploration — from crafting intuitive UI/UX designs and building responsive websites, 
            to developing functional prototypes and data-driven systems. I’ve poured dedication into every detail to ensure each solution is impactful and meaningful. 
            <br /><br />
            Feel free to explore and discover how I turn ideas into real-world digital experiences.
            </p>
        <Swiper
            className="brand-swiper"
            modules={[Navigation, Pagination, EffectCoverflow]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={false} // <-- Nonaktifkan pagination bullets
            loop={true}
            effect="coverflow"
            coverflowEffect={{
                rotate: 30,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: true,
            }}
            breakpoints={{
                768: {
                slidesPerView: 2,
                spaceBetween: 30,
                },
                1024: {
                slidesPerView: 3,
                spaceBetween: 40,
                },
            }}
            >


          {projects.map((project, index) => (
            <SwiperSlide key={index}>
            <div className="brand-slide">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="slide-img"
                  style={{ cursor: 'pointer' }}
                />
                <div className="card-content">
                  <h3 style={{ fontSize: '1.2rem', color: '#1B355E', marginBottom: '0.5rem' }}>{project.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: '#444' }}>{project.description}</p>
                </div>
              </a>
            </div>
          </SwiperSlide>
          
          ))}
        </Swiper>
      </section>
      <Footer/>
    </div>
  );
};

export default Projects;

import React from 'react';
import VideoFile from "../../assets/video1.mp4";
import "./home.css";
import { ParallaxProvider, useParallax } from "react-scroll-parallax";

const Home = () => {
  
  const parallax = useParallax({
    scale: [1.34, 0, "easeInQuad"],
  });
  
  const handleVideoEnded = (event) => {
    event.target.play(); // Restart the video when it ends
  };
  
  return (
    <div ref={parallax.ref} className="parallax-container">
      <section className="home section" id="home">
        <div className="hero container">
          <video src={VideoFile} autoPlay loop muted onEnded={handleVideoEnded} className='back-video'></video>
          <div className="content">
            <h1>Skater Republic</h1>
            <a href="#about" className='home-btn'>Know more</a>
          </div>
        </div>
      </section>
    </div>
  );
}

const HomeWithParallax = () => (
  <ParallaxProvider>
    <Home />
  </ParallaxProvider>
);

export default HomeWithParallax;

import React from 'react'
import { ParallaxProvider, useParallax } from 'react-scroll-parallax';
import "./media.css"

const Media = () => {
    const scaleCParallax = useParallax({
        scaleX: [0, 3, "easeInQuad"],
      });
      const parallaxRotateY2 = useParallax({
        rotateY: [0, 360],
      });
      const parallaxRotateY3 = useParallax({
        rotateY: [0, 360],
      });
  return (
    <div>
      <br />
      <section className="card-container" ref={scaleCParallax.ref} id="media">
        <div className="card">
          <img src="https://img.freepik.com/premium-photo/winterthemed-3d-avatar-skiing-down-snowy-mountain-ai-generated_731790-16014.jpg?w=996" />
        </div>
        <div className="card">
          <img src="https://img.freepik.com/premium-vector/cartoon-kid-skateboarding-skatepark-illustration_9645-3931.jpg?w=900" />
        </div>
      </section>
      <br />
      <br />
      <section className="card-container">
        <div className="card" ref={parallaxRotateY2.ref}>
          <img src="https://img.freepik.com/free-vector/women-ice-skating-with-snowy-landscape_1262-19820.jpg?t=st=1708931831~exp=1708935431~hmac=8293b4bdf6acf27d05b878a41e31b85ada2185ef6a73583e105e70ba5b7e18a9&w=996" />
        </div>
        <div ref={parallaxRotateY3.ref} className="card">
          <img src="https://img.freepik.com/premium-photo/3d-avatar-dressed-as-ballet-dancer-gracefully-ai-generated_731790-11324.jpg?w=996" />
        </div>
      </section>
      <br />
      <section className="subscribe">
        <h1>Subscribe to know more!</h1>
        <br />
        <input type="email" placeholder="youremail@gmail.com" />
        <button><a href="https://news.xbox.com/en-us/2022/09/14/bmx-comes-to-riders-republic-today/" className='link'>Subscribe</a></button>
      </section>
    </div>
  )
}

const MediaWithParallax = () => (
    <ParallaxProvider>
        <Media />
    </ParallaxProvider>
);

export default MediaWithParallax;


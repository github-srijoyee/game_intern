import React from 'react';
import "./community.css";
import CommunityImg from "../../assets/community.png";
import stampImg from "../../assets/stamp.svg"

const Community = () => {
    /*const parallaxEffect = useParallax({
      /* translateX: [7.5,5, "easeOutQuint"],
        scale: [0,1, "easeOutQuad"],
      });*/
  return (
    <>
    
    <div className="community-container" id="community">
    <h2 className='headline7'>Join our community</h2>
    <ul className='footer-icon2'>
        
        <li className='headline8'><a href="https://www.facebook.com/" className='footer-link'><i class="uil uil-facebook"> </i></a></li>
        <li className='headline8'><a href="https://twitter.com/i/flow/login" className='footer-link'><i class="uil uil-twitter-alt"> </i></a></li>
        <li className='headline8'><a href="https://www.instagram.com/" className='footer-link'><i class="uil uil-instagram"> </i></a></li>
        <li className='headline8'><a href="https://www.twitch.com/" className='footer-link'><i class='bx bxl-twitch'> </i></a></li>
        <li className='headline8'><a href="https://www.reddit.com/" className='footer-link'><i class="uil uil-reddit-alien-alt"> </i></a></li>
        <li className='headline8'><a href="https://www.discord.com/" className='footer-link'><i class="uil uil-discord"> </i></a></li>
      </ul>
      <img src={CommunityImg} alt="" className='com-img' />
      <div className="content">
        <h4 className="headline2">Join The Community</h4>
        <h4 className="headline3">The Official Skater Republic. Discord Server</h4>
        <button className='a1'><a href="https://www.discord.com/" className='com-link'>
          Join </a><i class="uil uil-discord"></i>
        </button>
</div>
<div className="headlines">
<h4 className='headline4'> The Official Skater Republic.</h4>
<h4 className='headline6'>Join the conversation</h4>
</div>
</div>
      
      <div className="links">
        <ul className='footer-tab'>
          <li className='headline5'><a href="#" className='footer-link'>Home</a></li>
          <li className='headline5'>Insider</li>
          <li className='headline5'>Faq</li>
          <li className='headline5'>Reel</li>
        </ul>
       
        <ul className='footer-icon'>
        
          <li className='headline5'><a href="https://www.facebook.com/" className='footer-link'><i class="uil uil-facebook"> </i></a></li>
          <li className='headline5'><a href="https://twitter.com/i/flow/login" className='footer-link'><i class="uil uil-twitter-alt"> </i></a></li>
          <li className='headline5'><a href="https://www.instagram.com/" className='footer-link'><i class="uil uil-instagram"> </i></a></li>
          <li className='headline5'><a href="https://www.twitch.com/" className='footer-link'><i class='bx bxl-twitch'> </i></a></li>
          <li className='headline5'><a href="https://www.reddit.com/" className='footer-link'><i class="uil uil-reddit-alien-alt"> </i></a></li>
          <li className='headline5'><a href="https://www.discord.com/" className='footer-link'><i class="uil uil-discord"> </i></a></li>
        </ul>
        </div>

       
        <img src={stampImg} alt="" className='stamp'/>
        <a className="footer-link1" href="#"><i class="uil uil-game-structure"></i></a>
     </>
  );
}
export default Community;

/*const CommunityWithParallax = () => (
    <ParallaxProvider>
        <Community />
    </ParallaxProvider>
);*/



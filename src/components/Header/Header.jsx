import React, { useState } from 'react';
import "./header.css";
const Header = () => {
    /*change background header*/
/*window.addEventListener("scroll",function(){
    const header=document.querySelector(".header");
    if(this.scrollY>=80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
});

    const[Toggle,showMenu]=useState(false);
    const [activeNav,setActiveNav]=useState("#home");*/
  return (
      <>
            <nav className="navbar navbar-expand-lg ">
              <div className="container-fluid">
                <a className="navbar-brand " href="#"><i class="uil uil-game-structure"></i></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link" aria-current="page" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#media">Media</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#news">News</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#purchase">Purchase</a>
                    </li>
                    
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Social Media
                      </a>
                      <ul className="dropdown-menu me-auto">
                        <li><a className="dropdown-item" href="https://www.facebook.com/"><i class="uil uil-facebook"> </i>Facebook</a></li>
                        <li><a className="dropdown-item" href="https://www.instagram.com/"><i class="uil uil-instagram"> </i>Instagram</a></li>
                        <li><a className="dropdown-item" href="https://www.twitter.com/"><i class="uil uil-twitter-alt"> </i>Twitter</a></li>
                        <li><a className="dropdown-item" href="https://www.twitch.com/"><i class='bx bxl-twitch'> </i>Twitch</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="https://www.reddit.com/"><i class="uil uil-reddit-alien-alt"> </i>Reddit</a></li>
                        <li><a className="dropdown-item" href="https://www.discord.com/"><i class="uil uil-discord"> </i>Discord</a></li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#community">Contact Us</a>
                    </li>
                  </ul>
                    <button className="btn btn-outline-primary" type="submit"><a href="https://news.xbox.com/en-us/2022/09/14/bmx-comes-to-riders-republic-today/" className='com-link'>Download</a></button>
                </div>
              </div>
            </nav> 
      </>  
  )
}

export default Header

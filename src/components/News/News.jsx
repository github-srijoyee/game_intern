import React from 'react'
import "./news.css"
import Img1 from "../../assets/design1.avif"
import Img2 from "../../assets/design2.webp"
import Img3 from "../../assets/design3.jpeg"

const News = () => {
  return (
    
    <section className="section-services" id="news">
    <div className="container">
        <h1 className="main-heading">
            News
        </h1>
    </div>
    <div className="container grid grid-three-cols">
<div className="card">
    <div className="card-img">
        <img src={Img1} alt="our services info" width="200" />
    </div>
    <div className="card-details">
        <div className="grid grid-two-cols">
        <h5>Special feature available now!</h5>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente quaerat quasi ipsum at laboriosam doloribus ullam, qui corporis veniam asperiores dolores quis excepturi sequi recusandae, deleniti velit dicta optio. Iusto amet, tenetur a, nisi placeat similique libero nihil 
    provident esse quis quaerat, in ducimus aliquid ipsam quidem itaque! Aliquid, illum.</p>
        </div>
        <a href="#">Know more</a>
        
    </div>
</div>
<div className="card">
    <div className="card-img">
        <img src={Img2} alt="our services info" width="200" />
    </div>
    <div className="card-details">
        <div className="grid grid-two-cols">
        <h5>Get Exciting Goodies</h5>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente quaerat quasi ipsum at laboriosam doloribus ullam, qui corporis veniam asperiores dolores quis excepturi sequi recusandae, deleniti velit dicta optio. Iusto amet, tenetur a, nisi placeat similique libero nihil 
    provident esse quis quaerat, in ducimus aliquid ipsam quidem itaque! Aliquid, illum.</p>
        </div>
        <a href="#">Know more</a>
        
    </div>
</div>
<div className="card">
    <div className="card-img">
        <img src={Img3} alt="our services info" width="200" />
    </div>
    <div className="card-details">
        <div className="grid grid-two-cols">
        <h5>Join Discord Community!</h5>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente quaerat quasi ipsum at laboriosam doloribus ullam, qui corporis veniam asperiores dolores quis excepturi sequi recusandae, deleniti velit dicta optio. Iusto amet, tenetur a, nisi placeat similique libero nihil 
    provident esse quis quaerat, in ducimus aliquid ipsam quidem itaque! Aliquid, illum.</p>
        </div>
        <a href="#">Know more</a>
        
    </div>
</div>



    </div>
    
</section>
    );
};

export default News

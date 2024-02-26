import React, { useState } from 'react';
import PurchaseFile from "../../assets/purchase.jpg";
import "./purchase.css";
import { ParallaxProvider, useParallax } from 'react-scroll-parallax';

const Purchase = () => {
    const parallaxRotateY = useParallax({
        rotateY: [0, 360],
    });
    const [formData, setFormData] = useState({
        country: '', // Corrected the state key to match the input field
        steam: '',
        edition:''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData); // Just an example, you can replace it with your logic
    };

    return (
        <section className="purchase section" id="purchase">
            <div className="hero container">
                <div className="image-container" style={{ position: 'relative' }}>
                    <img
                        ref={parallaxRotateY.ref}
                        src={PurchaseFile}
                        alt="image"
                        className='back-img'
                        style={{ userSelect: 'none' }} // Prevent selection on the image
                    />
                    <div className="form-overlay">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <select name="country" value={formData.country} onChange={handleChange}>
                                <option value="India">India</option>
                                    <option value="United Arab Emirates">United Arab Emirates</option>
                                    <option value="Argentina">Argentina</option>
                                    <option value="Austria">Austria</option>
                                    <option value="AT-DE">AT-DE</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                    <option value="Belgium">Belgium</option>
                                    <option value="Belgium French">Belgium French</option>
                                    <option value="BE-NL">BE-NL</option>
                                    <option value="Bulgaria">Bulgaria</option>
                                    <option value="Bahrain">Bahrain</option>
                                    <option value="Bolivia">Bolivia</option>
                                    <option value="Brazil">Brazil</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Le Canada Francais">Le Canada Francais</option>
                                    <option value="Switzerland">Switzerland</option>
                                    <option value="Schweizerische Eidgenossenschaft">Schweizerische Eidgenossenschaft</option>
                                    <option value="Confederation Suisse">Confederation Suisse</option>
                                    <option value="Confederazione Svizzera">Confederazione Svizzera</option>
                                    <option value="Chile">Chile</option>
                                    <option value="Colombia">Colombia</option>
                                    <option value="Costarica">Costarica</option>
                                    <option value="Cypress">Cypress</option>
                                    <option value="Czech Republic">Czech Republic</option>
                                    <option value="Deutschland">Deutschland</option>
                                    <option value="Danmark">Danmark</option>
                                    <option value="Ecuador">Ecuador</option>
                                    <option value="Espana">Espana</option>
                                    <option value="Suomi">Suomi</option>
                                    <option value="France">France</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="Greece">Greece</option>
                                    <option value="Gautemala">Gautemala</option>
                                    <option value="Hong Kong">Hong Kong</option>
                                    <option value="Honduras">Honduras</option>
                                    <option value="Croatia">Croatia</option>
                                    <option value="Hungary">Hungary</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="Ireland">Ireland</option>
                                    <option value="Israel">Israel</option>
                                    <option value="Iceland">Iceland</option>
                                    <option value="Italia">Italia</option>
                                    <option value="Kuwait">Kuwait</option>
                                    <option value="Lebanon">Lebanon</option>
                                    <option value="Luxemburg">Luxemburg</option>
                                    <option value="Luxembourg">Luxembourg</option>
                                    <option value="Macedonia">Macedonia</option>
                                    <option value="Malta">Malta</option>
                                    <option value="Mexico">Mexico</option>
                                    <option value="Malaysia">Malaysia</option>
                                    <option value="Nicargua">Nicargua</option>
                                    <option value="Netherlands">Netherlands</option>
                                    <option value="Norge">Norge</option>
                                    <option value="New Zealand">New Zealand</option>
                                    <option value="Oman">Oman</option>
                                    <option value="Panama">Panama</option>
                                    <option value="Peru">Peru</option>
                                    <option value="Polska">Polska</option>
                                    <option value="Portugal">Portugal</option>
                                    <option value="Paraguay">Paraguay</option>
                                    <option value="Qatar">Qatar</option>
                                    <option value="Romania">Romania</option>
                                    <option value="Serbia">Serbia</option>
                                    <option value="Saudi Arabia">Saudi Arabia</option>
                                    <option value="Sverige">Sverige</option>
                                    <option value="Singapore">Singapore</option>
                                    <option value="Slovenia">Slovenia</option>
                                    <option value="Slovakia">Slovakia</option>
                                    <option value="El Salvador">El Salvador</option>
                                    <option value="Turkey">Turkey</option>
                                    <option value="Taiwan">Taiwan</option>
                                    <option value="Ukraine-Russian">Ukraine-Russian</option>
                                    <option value="United States">United States</option>
                                    <option value="Uruguay">Uruguay</option>
                                    <option value="Kosovo">Kosovo</option>
                                    <option value="South Africa">South Africa</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>
                            <div>
                                <select name="steam" value={formData.steam} onChange={handleChange}>
                                    <option value="">Select your Steam</option>
                                    <option value="PS4">PS4</option>
                                <option value="PS5">PS5</option>
                                    <option value="XBOX ONE">XBOX ONE</option>
                                    <option value="XBOX SERIES X|S">XBOX SERIES X|S</option>
                                    <option value="Epic">Epic</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>
                            <div>
                                <select name="steam" value={formData.steam} onChange={handleChange}>
                                    <option value="">Digital Edition</option>
                                    <option value=""></option>
                                    </select>
                            </div>
                            <button type="submit">
                                <a href="https://news.xbox.com/en-us/2022/09/14/bmx-comes-to-riders-republic-today/">Purchase</a>
                            </button>
                        </form>
                        </div>
                        <div>
                        
                            <div className="headline-container">
                            <div className="form-overlay1">
                                <h2 className="headline">Purchase Skater Republic</h2>
                                <h4 className="headline1">Buy the latest version</h4>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

        </section>
    );
};

const PurchaseWithParallax = () => (
    <ParallaxProvider>
        <Purchase />
    </ParallaxProvider>
);

export default PurchaseWithParallax;

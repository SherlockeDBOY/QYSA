import React, {useState, useRef, useEffect} from 'react';
import "./Home.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import amazon from '../IMG/amazon_PNG28.png';
import Bayers from '../IMG/bayer-logo-8.png';
import DB from '../IMG/DB.png';
import Hein from '../IMG/hein.png';
import HBSC from '../IMG/HSBC.png';
import ibm from '../IMG/ibm_PNG19653.png';
import nike from '../IMG/nike_PNG19.png';
import digitalMarketing from "../IMG/digital marketing.jpg";
import placement from "../IMG/Placement.jpeg";
import dataManagement from "../IMG/data-management.jpg";
import polaroid from '../IMG/polaroid-1-logo-png-transparent.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import CardSer from './CardSer';


function Home() {
    useEffect(() => {
        AOS.init({
            offset: 40,
            delay: 0,
            duration: 1750,
            easing: 'ease-in-out-sine',
            once: false,
            mirror: true,
            anchorPlacement: 'top-bottom',
        });
    })
    const [current, setCurrent] = useState(0);
    const length = document.getElementsByClassName("slide").length;
    const timeOut = useRef(null);
    const nextSlide = () =>{
        setCurrent(current === length - 1 ? 0 : current + 1);
        // console.log(current);
    };
    const prevSlide = () =>{
        setCurrent(current === 0 ? length - 1 : current - 1);
        // console.log(current);
    };

    return (
        <>
        <div>
            <div  className="content">
                {/*  About Section   */}
                <div  className="about-container">
                <div  className="about-content" >
                    <p data-aos="zoom-in-up">
                    We are a young team of talents that believe transparency and honesty are central to providing service - relationship building with our client is our prime objective.<br/>

                    We at QYSA Solutions aspire to help businesses expand globally through a variety of creative solutions. We are based in India with associates in five countries around the world. We ensure that our service delivery is quick and efficient while continuously adapting to our client's needs. We are always looking to strengthen our team further with globally proficient and experienced individuals
                    </p>

                    <a href="/"  className="button filled">Learn More</a>
                </div>
                </div>

                <div  className="service-container">
                <div  className="title service">
                    <h2>Our Services</h2>
                </div>
                <div  className="card-container" >
                    <CardSer
                        title="Placement and training"
                        image={placement}
                        content="We can find the perfect employee for you. We give corporate training to professionals and mould them to suit your requirements."
                        data="fade-up"
                    />
                    <CardSer
                        title="Digital marketing and website development"
                        image={digitalMarketing}
                        content=" We can promote your product or service on the internet and other various media platforms. "
                        data="fade-up"
                    />
                    <CardSer
                        title="Data management"
                        image={dataManagement}
                        content="Your data is an enormous untapped resource. We want to help you optimise and use data that your business collects."
                        data="fade-up"
                    />
                </div>
                <div  className="learn-more">
                    <a href="javascript:void(0)"  className="button filled">Learn More</a>
                </div>
                </div>

                {/* // choose Section   */}
                <div  className="choose-container">
                <div  className="title choose">
                    <h2>Why Choose Us</h2>
                </div>
                <div className="choose-content" data-aos="fade-up">
                    <p>
                        QYSA follows a lean and agile development process which ensures that we deliver fast while eliminating waste. We adapt ourselves to our client's ever-changing requirements and provide unique solutions reflective of our global perspective. We uphold our core values of transparency and honesty while we provide exceptional service.
                    </p>
                </div>
                </div>

                 {/* Business Partners Section   */}
                <div  className="partner-container">
                <div  className="title partner">
                    <h2>Business Partners</h2>
                </div>
                <div  className="partner-grid-container">
                    <div  className="grid-img">
                    <img src={amazon} data-aos="zoom-in-up"data-aos-delay="0" data-aos-duration="1750"/>
                    </div>
                    <div  className="grid-img">
                    <img src={HBSC} data-aos="zoom-in-up"data-aos-delay="0" data-aos-duration="1750"/>
                    </div>
                    <div  className="grid-img">
                    <img src={DB} data-aos="zoom-in-up" data-aos-delay="0" data-aos-duration="1750"/>
                    </div>
                    <div  className="grid-img">
                    <img src={Bayers} data-aos="zoom-in-up"data-aos-delay="0" data-aos-duration="1750"/>
                    </div>
                    <div  className="grid-img">
                    <img src={nike} data-aos="zoom-in-up" data-aos-delay="0" data-aos-duration="1750"/>
                    </div>
                    <div  className="grid-img">
                    <img src={Hein} data-aos="zoom-in-up" data-aos-delay="0" data-aos-duration="1750"/>
                    </div>
                    <div  className="grid-img">
                    <img src={polaroid} data-aos="zoom-in-up" data-aos-delay="0" data-aos-duration="1750"/>
                    </div>
                    <div  className="grid-img">
                    <img src={ibm} data-aos="zoom-in-up" data-aos-delay="0" data-aos-duration="1500"/>
                    </div>
                </div>
                <div  className="learn-more">
                    <a href="javascript:void(0)"  className="button filled">More info</a>
                </div>
                </div>

                {/* Get Started Section */}
                <div className="get-container">
                    <div className="get-content" data-aos="fade-right" data-aos-offset="0" data-aos-delay="5" data-aos-duration="2000">
                        <div className="get-title">
                            <h2>Get Started Today</h2>
                        </div>
                        <div className="get-des">
                            <p>
                                QYSA Solutions always try to provide the best business solutions for the client to grow their business sharply and smoothly
                            </p>
                        </div>
                    </div>
                    <div className="get-link">
                    <a href="javascript:void(0)"  className="button filled">Contact Us</a>
                    </div>
                </div>
                {/* Map Section */}
                <div className="map-container">
                </div>
                {/* // Contact Us Section   */}
                <div  className="contact-container">
                    <div  className="card-container">
                        <div  className="cnt-card">
                            <div  className="card-icon">
                                <FontAwesomeIcon icon={faPhoneSquareAlt} />
                            </div>
                            <div  className="card-heading">
                                <h3>Call Us At</h3>
                            </div>
                            <div  className="card-details">
                                <a href="tel:+00 00000000">+91 00000000</a>
                            </div>
                        </div>
                        <div  className="cnt-card">
                            <div  className="card-icon">
                                <FontAwesomeIcon icon={faMapMarkedAlt} />
                            </div>
                            <div  className="card-heading">
                                <h3>Address</h3>
                            </div>
                            <div  className="card-details">
                                <address>
                                    #532,WNO.176, Nirmana Sangha,<br />
                                    RKK Nagar, Mico L/O, Bangalore,<br />
                                    Karnataka - 560076
                                </address>
                            </div>
                        </div>
                        <div  className="cnt-card">
                            <div  className="card-icon">
                                <FontAwesomeIcon icon={faMailBulk} />
                            </div>
                            <div  className="card-heading">
                                <h3>E-Mail</h3>
                            </div>
                            <div  className="card-details">
                                <a href="mailto:info@qysasolutions.com"> info@qysasolutions.com </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Home

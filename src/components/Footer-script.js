import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import "./Footer.css";


function FooterScript() {
    return (
        <div>
            {/* // Footer   */}
            <footer  className="footer">
                <div  className="fo-container">
                <div  className="fo-items">
                    <h2>QYSA Solutions</h2>
                    <p>
                    We at QYSA Solutions aspire to help businesses expand globally through a variety of creative solutions.  We ensure that our service delivery is quick and efficient while continuously adapting to our client's needs.
                    </p>
                </div>
                <div  className="fo-items">
                    <h4>Quick Links</h4>
                    <ul>
                    <li><a href="javascript:void(0)">Home</a></li>
                    <li><a href="javascript:void(0)">Service</a></li>
                    <li><a href="javascript:void(0)">Know Us</a></li>
                    <li><a href="javascript:void(0)">Connect</a></li>
                    </ul>
                </div>
                <div  className="fo-items">
                    <h2>Connect With Us</h2>
                    <p>
                    <FontAwesomeIcon icon={faMapMarkerAlt} style={{marginRight: "8px"}}/>
                    #532,WNO.176, Nirmana Sangha,<br />
                    RKK Nagar, Mico L/O, Bangalore,<br />
                    Karnataka - 560076
                    </p>
                    <a href="mailto:info@qysasolutions.com ">info@qysasolutions.com </a>
                    <a href="mailto:enquire@qysasolutions.com ">enquire@qysasolutions.com </a>
                    <br />
                    <a href="tel:+00 00000000">+00 00000000</a>
                </div>
                <div  className="fo-items">
                    <h4>Follow Us:</h4>
                    <div  className="sl-media">
                    <a href="/"><FontAwesomeIcon icon={faFacebook} className="icons-fa"/></a>
                    <a href="/"><FontAwesomeIcon icon={faYoutube} className="icons-fa"/></a>
                    <a href="/"><FontAwesomeIcon icon={faInstagram} className="icons-fa"/></a>
                    <a href="/"><FontAwesomeIcon icon={faTwitter} className="icons-fa"/></a>
                    </div>
                </div>
                </div>
            </footer>
            <div  className="copyrighttext">
                <p>
                <span>Sort Axx</span> Copyright
                <FontAwesomeIcon icon={faCopyright} style={{marginInline: "10px"}}/> All Rights Reserved
                </p>
            </div>
        </div>
    )
}

export default FooterScript

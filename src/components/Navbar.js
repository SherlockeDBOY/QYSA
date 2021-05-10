import React, {useState, useEffect} from 'react';
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from "../IMG/Artboard_13xx.png";
// import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

function Navbar() {

    const [Navigation, setNavBar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 30) {
            setNavBar(true);
        }else{
            setNavBar(false);
        }
    }

    window.addEventListener("scroll", changeBackground);
    return (
        <div>
            <header className={Navigation ? 'navigation white' : 'navigation'}>
                <div className="nav-container">
                <input type="checkbox" name="" id="check" />
                <div className="logo-container">
                    <div className="logo">
                    <a href="javascript:void(0)">
                        <img src={logo} />
                    </a>
                    </div>
                </div>
                <div className="nav-btn">
                    <div className="nav-links">
                    <ul>
                        <li className="nav-link"><a href="javascript:void(0)">Home</a></li>
                        <li className="nav-link">
                        <a href="javascript:void(0)"
                            >Service<div> <FontAwesomeIcon icon={faCaretDown} className="drop-arrow" /></div></a>
                        <div className="drop-down">
                            <ul>
                            <li className="drop-links">
                                <a href="">Placement and training</a>
                            </li>
                            <li className="drop-links"><a href="">Import & export</a></li>
                            <li className="drop-links"><a href="">Ecommerce</a></li>
                            <li className="drop-links">
                                <a href=""
                                >Digital marketing and website development
                                </a>
                            </li>
                            <li className="drop-links"><a href="">Cybersecurity</a></li>
                            <li className="drop-links"><a href="">Data management</a></li>
                            <li className="drop-links"><a href="">Blockchain</a></li>
                            <li className="drop-links">
                                <a href="">Event management /manpower</a>
                            </li>
                            </ul>
                            <div className="arrow"></div>
                        </div>
                        </li>
                        <li className="nav-link">
                        <a href="javascript:void(0)"
                            >Know Us <div> <FontAwesomeIcon icon={faCaretDown} className="drop-arrow" /></div></a>
                        <div className="drop-down">
                            <ul>
                                <li className="drop-links"><a href="">About Us</a></li>
                                <li className="drop-links"><a href="">Our Vision</a></li>
                                <li className="drop-links"><a href="">Our Team</a></li>
                                <li className="drop-links"><a href="">Our Partners</a></li>
                            </ul>
                            <div className="arrow"></div>
                        </div>
                        </li>
                        <li className="nav-link">
                        <a href="javascript:void(0)">Connect <div><FontAwesomeIcon icon={faCaretDown} className="drop-arrow"/></div></a>
                        <div className="drop-down">
                            <ul>
                            <li className="drop-links"><a href="">Link 1</a></li>
                            <li className="drop-links"><a href="">Link 2</a></li>
                            <li className="drop-links"><a href="">Link 3</a></li>
                            </ul>
                            <div className="arrow"></div>
                        </div>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="icons">
                    <a href="javascript:void(0)">
                        <div>
                            <FontAwesomeIcon icon={faSearch} />
                        </div>
                    </a>
                    <div className="hamburger-container">
                    <div className="hamburger">
                        <div></div>
                    </div>
                    </div>
                </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar;

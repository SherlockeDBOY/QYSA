import React, {useEffect} from 'react';
import "./CardSer.css";
import AOS from 'aos';
import 'aos/dist/aos.css';


function CardSer({title, image, content, data}) {
    
    return (
        <div className="card" data-aos={data}>
            <div  className="card-img">
                <img src={image} />
            </div>
            <div  className="card-content">
                <div  className="card-title">
                    <h3>{title}</h3>
                </div>
                <div  className="card-des">
                    <p>
                        {content}
                    </p>
                </div>
                <a href="javascript:void(0)"
                    className="button outline"
                    style={{color: "black"}}>
                        More
                </a>
            </div>
        </div>
    )
}

export default CardSer

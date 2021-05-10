import React from 'react';
import "./card.css";

function Card({title, image, prof_img, content}) {
    return (
        <div className="card">
            <div  className="card-img">
                <img src={image} />
            </div>
            <div  className="card-content">
                <div  className="prof-img">
                    <img src={prof_img} />
                </div>
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

export default Card

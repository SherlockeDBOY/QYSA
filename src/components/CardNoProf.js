import React from 'react';
import "./CardNoProf.css";

function CardNoProf({image, content, title, href, link}) {
    return (
        <div  className="card">
            <div  className="card-img">
                <img src={image} />
            </div>
            <div  className="card-content">
                <div  className="ways-card-title">{title}</div>
                <div  className="ways-card-des">
                    {content}
                </div>
                <div  className="ways-card-email">
                    <a href={href}>{link}</a>
                </div>
            </div>
        </div>
    )
}

export default CardNoProf

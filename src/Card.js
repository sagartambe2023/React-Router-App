import React from 'react';
import './App.css';
// Functional component responsible for rendering individual cards
const Card = ({ data }) => {
    // Destructuring props to extract data for each card
    const { url, title, date } = data;

    return (
        <div className="col-md-4 mb-4 m">
            <div className="card h-100 maincard ">
                <img src={url} className="card-img-top" style={{ height: "200px", width:"350px" }} alt={title} />
                <div className="card-body cardbody">
                    <h6 className="card-title cardtitle mt-1">{title}</h6>
                </div>
                <div className="card-footer bottomdate" style={{ color: "rgb(178, 174, 174)" , width:"350px" }}>{date}</div>
            </div>
        </div>
    );
};

export default Card;
import React from 'react'
import './Card.css'

export const Card = ({ image, date, number, title }) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={image} />
      </div>
      <div className="text-container">
        <p>{date}</p>
        <p>{number}</p>
      </div>
      <h1 className="title"> {title}</h1>
    </div>
  );
};

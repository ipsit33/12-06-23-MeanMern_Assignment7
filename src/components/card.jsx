import React from "react";
import "./card.css";

function Card({image,title,content,year,onPatch,onDelete}){
    return(
        <div className="box">
            <img src={image} alt="error" />
            <h2>{title} || {year}</h2>
            <p>{content}</p>
            <button onClick={onPatch}>Update Review</button>
            <button onClick={onDelete}>Delete Movie</button>
        </div>
    );
}

export default Card;
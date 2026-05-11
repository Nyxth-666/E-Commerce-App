import React from "react";

const StarRating = ({ rating = 0, reviews = 0 }) => {
    return (
        <div className="rating">
            {"⭐".repeat(rating)}
            {"☆".repeat(5 - rating)}
            <span> ({reviews})</span>
        </div>
    )
}

// push test

export default StarRating;
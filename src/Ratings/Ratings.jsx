import React from 'react'
import './Ratings.css';
import Rating from 'react-rating';
export default function Ratings() {
  return (
    <div>
        <div className="ratings">
            <Rating 
            emptySymbol="far fa-star"
            fullSymbol="fas fa-star"
            fractions={2}
            readonly
            initialRating={3}
            />
        </div>
    </div>
  )
}

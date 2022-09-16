import React from 'react';
import Ratings from '../../../Ratings/Ratings';
import './AResult.css';

export default function AResult() {
  return (
    <div>
        <div className="a-result">
           <img src="https://via.placeholder.com/210" alt="" className='business-img'/>
            <div className="business-info">
                <h2 className="subtitle">Sushi Buffet</h2>
                <Ratings/>
                <p>$$</p>
                
                <p>
                    <span className="tag">
                        sushi
                    </span>
                </p>
            </div>
            <div className='contact-info'>
            <p>555-555-5555</p>
                <p>Address</p>
                <p>zip code</p>
            </div>
        </div>
    </div>
  )
}

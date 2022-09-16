import React from 'react';
import './Summary.css';

export default function Summary() {
    return (
        <>
            <div className="sumcon">
                <div className='summary'>
                    <h1 className="subtitle"><strong>Restaurants </strong>Sushi</h1>
                    <p>Showing 1-20 out of 400 results.</p>
                </div>
                <div className="filters">
                    <button className="button">
                        <span className="icon">
                            <i className="fas fa-sliders-h"></i>
                        </span>
                        <span>All filters</span>
                    </button>
                    <div className="buttons has-addons">
                        <button className="buttons">$</button>
                        <button className="buttons">$$</button>
                        <button className="buttons">$$$</button>
                        <button className="buttons">$$$$</button>
                    </div>
                    <button className="button">
                        <span className="icon">
                            <i className="fas fa-clock"></i>
                        </span>
                        <span>Open Now</span>
                    </button>
                    <button className="button">
                        <span className="icon">
                            <i className="fas fa-dollar-sign"></i>
                        </span>
                        <span>Cash</span>
                    </button>
                </div>
            </div>
        </>
    )
}

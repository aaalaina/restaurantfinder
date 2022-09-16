import React from 'react';
import { useState } from 'react';
import './Search.css';
import Results from '../Results/Results';



export default function Search(props) {
const [term, setTerm] = useState(props.term || '');
const [location, setLocation] = useState(props.location || '');


function submit(e) {
    // if(typeof props.search === function) {
    //     props.search(term, location)
    // }
    console.log(term, location)
    e.preventDefault();
}

    const sizeClass = props.small ? '' : 'is-medium';
    return (

        <form onSubmit={submit}>
            <div className="field has-addons">
                <p className="control">
                    <button className={`button is-static ${sizeClass}`}>
                        Search
                    </button>
                </p>
                <p className="control">
                    <input className={`input input-control ${sizeClass}`} 
                    onChange={(e)=> setTerm(e.target.value)}
                    type="text" 
                    placeholder="Find a restaurant!"></input>
                </p>
                <div className="control">
                    <div className={`button is-static ${sizeClass}`}>
                        Near...
                    </div>
                </div>
                <p className="control">
                    <input className={`input ${sizeClass}`} 
                    onChange={(e)=> setLocation(e.target.value)}
                    type="text" 
                    placeholder="Where are you located?"></input>
                </p>
                <div>
                    <button className="button is-medium" onClick={<Results/>}>
                        <span className="icon is-small">
                            <i className="fas fa-search"></i>
                        </span>
                    </button>
                </div>
            </div>
        </form>
    )
}

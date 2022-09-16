import React from 'react'
import AResult from './Result/AResult';
import './ShowResults.css';
// import axios from 'axios';
export default function ShowResults() {
  // const config = {
  //   headers: {
  //     Authorization:
  //       "Bearer {apikey}",
  //   },
  //   params: {
  //     term: "restaurants",
  //     location: 1234 street street,
  //     radius: 1609,
  //     sort_by: "relevance",
  //     limit: 50,
  //   },
  // };
  // axios
  //   .get("https://api.yelp.com/v3/restaurants/search", config)
  //   .then((response) => {
  //     console.log(response.data.restaurants[0].name); //This accesses the first restaurant in the businesses list
  //   });
  return (

    <div>
      {/* <div className="show-results">
        <h2>{value.name}</h2>
        <p>{value.location}</p>
        <button className="checkin">Check In</button>
      </div> */}
         <AResult/>
        <AResult/>
    </div>
   

  )
}

import React from 'react'
import AResult from './Result/AResult';
import './ShowResults.css';
// import axios from 'axios';
export default function ShowResults() {
  // const config = {
  //   headers: {
  //     Authorization:
  //       "Bearer {pZCzwCvLu67p8WtGveM27-OTL-jV_JJpyGL9-4KhKaDuvQByJ-zWud2VfMzxz_DMhJ541m55ZZTWqXfOv2UR6D-UcZK9tbhuBg7Qs409jwIAtRsr0Kn_i26jnE8jY3Yx}",
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

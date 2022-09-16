import React from 'react';
import { Wrapper, Status } from "@googlemaps/react-wrapper";

export default function GMaps() {
    return(
   <div>
        <Wrapper apiKey={""}>
    <MyMapComponent />
  </Wrapper>
    </div>
  )
}

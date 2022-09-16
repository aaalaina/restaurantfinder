import React from 'react';
import { Wrapper, Status } from "@googlemaps/react-wrapper";

export default function GMaps() {
    return(
   <div>
        <Wrapper apiKey={"AIzaSyCMdv-TljXao30K5GB75r0XZNPyFfGpkuo"}>
    <MyMapComponent />
  </Wrapper>
    </div>
  )
}

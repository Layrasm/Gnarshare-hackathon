import React,{useState} from 'react';
import ReactMapGL from 'react-map-gl';


const Map = () => {
  const [viewport,setViewPort] = useState({
    latitude:40.758701,
    longitude:-111.876183,
    height: "400px",
    width: "600px",
    zoom:10
  })





  
return(

  <div>
    <ReactMapGL   {...viewport}
      mapStyle="mapbox://styles/sjohnston92/ckfzs3edy0b3c19ojtf0iwbq5"
      mapboxApiAccessToken={"pk.eyJ1Ijoic2pvaG5zdG9uOTIiLCJhIjoiY2tmenJ5YmRjMXZqbDJ5bzkzam84bzQ0ZSJ9.CsShT752V8f7YeLupK69gA"} //This need to placed into an env file
    onViewportChange = {viewport => {
      setViewPort(viewport);
    }}
    >



    </ReactMapGL>
  </div>
)



}

export default Map;
import React,{useState} from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';



const Map = () => {
  const [viewport,setViewPort] = useState({
    latitude:40.758701,
    longitude:-111.876183,
    height: "400px",
    width: "600px",
    zoom:12
  })


return(
//TODO these need images in the place of name
  <div>
    <ReactMapGL   {...viewport}
      mapStyle="mapbox://styles/sjohnston92/ckfzs3edy0b3c19ojtf0iwbq5"
      mapboxApiAccessToken={"pk.eyJ1Ijoic2pvaG5zdG9uOTIiLCJhIjoiY2tmenJ5YmRjMXZqbDJ5bzkzam84bzQ0ZSJ9.CsShT752V8f7YeLupK69gA"} //This need to placed into an env file
    onViewportChange = {viewport => {
      setViewPort(viewport);
    }}
    >
      <Marker latitude={40.61} longitude={-111.59} offsetLeft={-20} offsetTop={-10}>
          <div>Solitude </div>
        </Marker>
        <Marker latitude={40.59} longitude={-111.58} offsetLeft={-20} offsetTop={-10}>
          <div>Brighton</div>
        </Marker>
        <Marker latitude={40.58} longitude={-111.65} offsetLeft={-20} offsetTop={-10}>
          <div>SnowBird</div>
        </Marker>
        <Marker latitude={40.58} longitude={-111.63} offsetLeft={-20} offsetTop={-10}>
          <div>Alta</div>
        </Marker>
        <Marker latitude={40.63} longitude={-111.47} offsetLeft={-20} offsetTop={-10}>
          <div>Deer Valley</div>
        </Marker>
        <Marker latitude={40.65} longitude={-111.50} offsetLeft={-20} offsetTop={-10}>
          <div>Park City</div>
        </Marker>

    </ReactMapGL>
  </div>
)



}

export default Map;
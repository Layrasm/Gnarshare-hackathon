import React,{useState} from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';



const About = () => {
  const [viewport,setViewPort] = useState({
    latitude:40.758701,
    longitude:-111.876183,
    height: "60vh",
    width: "60vw",
    zoom:6
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
          <div><span>&#127935;</span></div>
        </Marker>
        <Marker latitude={40.59} longitude={-111.58} offsetLeft={-20} offsetTop={-10}>
          <div><span>&#127935;</span></div>
        </Marker>
        <Marker latitude={40.58} longitude={-111.65} offsetLeft={-20} offsetTop={-10}>
          <div><span>&#127935;</span></div>
        </Marker>
        <Marker latitude={40.58} longitude={-111.63} offsetLeft={-20} offsetTop={-10}>
          <div><span>&#127935;</span></div>
        </Marker>
        <Marker latitude={40.63} longitude={-111.47} offsetLeft={-20} offsetTop={-10}>
          <div><span>&#127935;</span></div>
        </Marker>
        <Marker latitude={40.65} longitude={-111.50} offsetLeft={-20} offsetTop={-10}>
          <div><span>&#127935;</span></div>
        </Marker>

    </ReactMapGL>
  </div>
)



}

export default About;
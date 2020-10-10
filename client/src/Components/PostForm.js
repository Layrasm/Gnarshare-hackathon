import React,{useState,useContext} from 'react';
import {Form,Button} from "react-bootstrap"
import axios from "axios";
import {AuthContext} from "../providers/AuthProvider";

const PostForm= ({addPost}) => {
  const auth = useContext(AuthContext);
  const [postState, setPostState] = useState({
    name: "",
    body: "",
    avaliable_spots:0,
    departure_location:"",
    resort:"",
    ride_type:"",
    rider_level:"",
    departure_time:"",
    car_type:"",
    user_id: auth.user.id,
  });


  const handleChange = (e) => {
    setPostState({ ...postState, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`/api/posts`, postState)
    .then((res) => addPost(res.data));
  }

  return(

    <>
    <h1>Create a Ride</h1>
  <Form onSubmit={handleSubmit}>
    <Form.Group>
      <Form.Label>Name</Form.Label>
      <Form.Control 
      name="name" 
      value={postState.name}
      required
      onChange={handleChange} />
    </Form.Group>
    <Form.Group>
      <Form.Label>Body</Form.Label>
      <Form.Control 
      name="body" 
      type="text area"
      value={postState.body}
      required
      onChange={handleChange} />
    </Form.Group>
    <Form.Group>
      <Form.Label>Available Spots</Form.Label>
      <Form.Control 
      name="avaliable_spots"
      type="number" 
      value={postState.avaliable_spots}
      required
      onChange={handleChange}
       />
    </Form.Group>
    <Form.Group>
      <Form.Label>Location of Departure</Form.Label>
      <Form.Control
       name="departure_location" 
       type="string"
       value={postState.departure_location}
       required
       onChange={handleChange}
        />
    </Form.Group>
    <Form.Group>
      <Form.Label>Departure Time</Form.Label>
      <Form.Control 
      name="departure_time" 
      value={postState.departure_time}
      required
      onChange={handleChange} 
      />
    </Form.Group>
    <Form.Group>
      <Form.Label>Resort Destination</Form.Label>
      <Form.Control 
       name="resort" 
       value={postState.resort}
        required
        onChange={handleChange} 
      />
    </Form.Group>
    <Form.Group>
      <Form.Label>Rider Type</Form.Label>
      <Form.Control 
        name="ride_type" 
        value={postState.ride_type}
        required
        onChange={handleChange} 
       />
    </Form.Group>
    <Form.Group>
      <Form.Label>Rider Experience Level</Form.Label>
      <Form.Control
            name="rider_level" 
            value={postState.rider_level}
            required
            onChange={handleChange} 
        />
    </Form.Group>
    <Form.Group>
      <Form.Label>Car Type</Form.Label>
      <Form.Control
        name="car_type" 
        value={postState.car_type}
        required
        onChange={handleChange} 
       />
    </Form.Group>

    <Button type="submit"  onClick={handleSubmit}>Submit</Button>
  </Form>
  <br />
  <br />
  </>
  )
}

export default PostForm;
import React,{useState,useContext} from 'react';
import {Form,Button} from "react-bootstrap"
import axios from "axios";
import {AuthContext} from "../providers/AuthProvider";

const CommentForm= ({addComment, post, hide}) => {
  const auth = useContext(AuthContext);
  const [commentState, setCommentState] = useState({
    name: "",
    body: "",
    trip_type:"",
    res_spots:0,
    pickup_spot:"",
    rider_level:"",
    rider_type:"",
  });


  const handleChange = (e) => {
    setCommentState({ ...commentState, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`/api/posts/${post}/comments`, commentState)
    .then((res) => addComment(res.data));
    hide()
  }

  return(

    <>
    <h1>Create a Comment</h1>
  <Form onSubmit={handleSubmit}>
    <Form.Group>
      <Form.Label>Name</Form.Label>
      <Form.Control 
      name="name" 
      type="string"
      value={commentState.name}
      required
      onChange={handleChange} />
    </Form.Group>
    <Form.Group>
      <Form.Label>Body</Form.Label>
      <Form.Control 
      name="body" 
      type="text area"
      value={commentState.body}
      required
      onChange={handleChange} />
    </Form.Group>
    <Form.Group>
      <Form.Label>Trip Type</Form.Label>
      <Form.Control 
      name="trip_type"
      type="string" 
      value={commentState.trip_type}
      required
      onChange={handleChange}
       />
    </Form.Group>
    <Form.Group>
      <Form.Label>Reservation Spots</Form.Label>
      <Form.Control
       name="res_spots" 
       type="string"
       value={commentState.res_spots}
       required
       onChange={handleChange}
        />
    </Form.Group>
    <Form.Group>
      <Form.Label>Pickup Spot</Form.Label>
      <Form.Control 
      name="pickup_spot" 
      value={commentState.pickup_spot}
      required
      onChange={handleChange} 
      />
    </Form.Group>
    <Form.Group>
      <Form.Label>Rider Type</Form.Label>
      <Form.Control as="select" size="lg" name="rider_type" 
        value={commentState.rider_type}
        required
        onChange={handleChange}
        defaultValue="Skier">
        <option>Skier</option>
        <option>Snowboarder</option>
        
      </Form.Control>
    </Form.Group>
    <Form.Group>
      <Form.Label>Rider Experience Level</Form.Label>
      <Form.Control as="select" size="lg" name="rider_level" 
        value={commentState.rider_level}
        required
        onChange={handleChange}
        defaultValue="Beginner">
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Expert</option>
      </Form.Control>
    </Form.Group>
   
    <Button type="submit"  onClick={handleSubmit}>Submit</Button>
  </Form>
  <br />
  <br />
  </>
  )
}

export default CommentForm;
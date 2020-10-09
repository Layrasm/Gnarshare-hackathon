import React from 'react';
import {Form,Button} from "react-bootstrap"

const PostForm= () => {

  return(
  <Form>
    <Form.Group controlId="formName">
      <Form.Label>Name</Form.Label>
      <Form.Control type="name" placeholder="Name" />
    </Form.Group>
    <Form.Group controlId="formBody">
      <Form.Label>Body</Form.Label>
      <Form.Control type="body" placeholder="Body" />
    </Form.Group>
    <Form.Group controlId="formSpots">
      <Form.Label>Available Spots</Form.Label>
      <Form.Control type="spots" placeholder="Spots" />
    </Form.Group>
    <Form.Group controlId="formDepartLocation">
      <Form.Label>Location of Departure</Form.Label>
      <Form.Control type="location" placeholder="Location" />
    </Form.Group>
    <Form.Group controlId="formDepartureTime">
      <Form.Label>Departure Time</Form.Label>
      <Form.Control type="departure_time" placeholder="Departure Time" />
    </Form.Group>
    <Form.Group controlId="formResort">
      <Form.Label>Resort Destination</Form.Label>
      <Form.Control type="resort" placeholder="Resort Name" />
    </Form.Group>
    <Form.Group controlId="formRider">
      <Form.Label>Rider Type</Form.Label>
      <Form.Control type="ride_type" placeholder="Rider Type" />
    </Form.Group>
    <Form.Group controlId="formSkillLevel">
      <Form.Label>Rider Experience Level</Form.Label>
      <Form.Control type="rider_level" placeholder="Experience Level" />
    </Form.Group>
    <Form.Group controlId="formSkillLevel">
      <Form.Label>Rider Experience Level</Form.Label>
      <Form.Control type="rider_level" placeholder="Experience Level" />
    </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    
  )
  
}

export default PostForm;
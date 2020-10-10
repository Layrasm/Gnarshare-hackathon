import React from 'react';
import {Jumbotron} from 'react-bootstrap'

const Comment = () => {

  return(
    <Jumbotron>
      <div className="commentCard">
      <h1>Name</h1>
      <p>Body</p>
      <hr />
      <p>Trip type:</p>
      <p>Reserved Spots:</p>
      <p>Pick Up Spots:</p>
      <p>PassengerLevel:</p>
      <p>Rider Type:</p>
      </div>
  </Jumbotron>


  )
}

export default Comment;
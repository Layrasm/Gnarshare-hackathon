import React,{useContext}from 'react';
import  {Card,ListGroup} from 'react-bootstrap';
import {AuthContext} from '../providers/AuthProvider';


const User = (props) => {
  const {user} = useContext(AuthContext)
  return (
    <div>
      <Card>
        <Card.Title>Name:<br/> {user.first_name} {user.last_name}</Card.Title>
        <ListGroup>
          <ListGroup.Item>Email: {user.email}</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}

export default User;
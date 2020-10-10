import Axios from 'axios';
import React, {useState,useEffect} from 'react';
import {Card, Button, ListGroup} from "react-bootstrap"
import Comment from "./Comment"
import PostForm from './PostForm';

const Post = () => {

  const [posts, setPosts] = useState([]);
  const [show, setShow] = useState(false);
  const [showCreate, setShowCreate] = useState(false);

  const getPost = async () => {
    try{
      let res = await Axios.get("/api/posts")
      setPosts(res.data);
    }catch (error){
      console.log(error.response);
      alert("Error:Displaying Posts")
    }
    

  }

  useEffect(() => {
    getPost();
  }, []);
  
  const addPost = (post) => {
    debugger;
    setPosts([...posts, post]);
  };

const renderPost = ()=>{
  return posts.map((post)=>(
  <Card>
    <Card.Body>
    <Card.Title>{post.name}</Card.Title>
    <Card.Text>{post.body}</Card.Text>
    <ListGroup variant="flush">
    <ListGroup.Item>{post.avaliable_spots}</ListGroup.Item>
    <ListGroup.Item>{post.departure_location}</ListGroup.Item>
    <ListGroup.Item>{post.departure_time}</ListGroup.Item>
    <ListGroup.Item>{post.car_type}</ListGroup.Item>
    <ListGroup.Item>{post.resort}</ListGroup.Item>
    <ListGroup.Item>{post.ride_type}</ListGroup.Item>
    <ListGroup.Item>{post.rider_level}</ListGroup.Item>
  </ListGroup>
  <div className="btnfam">
  {show && <Comment />}
      <Button onClick={() => setShow(!show)}>
        {show ? "Hide Comments " : "View Comments"}
      </Button>

   <Button variant="success">Create a Comment</Button>
  </div>
    </Card.Body>
  </Card>
  ));
}

return(
  <>
  {showCreate && <PostForm addPost={addPost} />}
      <Button variant="success" block onClick={() => setShowCreate(!showCreate)}>
        {showCreate ? "Cancel " : "Create a Ride"}
      </Button>

  {renderPost}
  </>
)

}

export default Post;
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
    setPosts([...posts, post]);
  };



  const deletePost = (id) => {
    
    Axios.delete(`/api/posts/${id}`, {params:{id:id} }).then(res => {
      console.log(res)
      })
    }
    
  
  
  // const deletePost = id => setPosts(posts.filter(post => post.id !== id));
  // <UserTable users={users} deleteUser={deleteUser} />
  // <button onClick={() => props.deleteUser(id)}>Delete</button>




const renderPost = ()=>{
  return posts.map((post)=>(
  <Card key = {post.id}>
    <Card.Body>
    <Card.Title>Name:{post.name}</Card.Title>
    <Card.Text>Body:{post.body}</Card.Text>
    <ListGroup variant="flush">
    <ListGroup.Item>Available Spots:{post.avaliable_spots}</ListGroup.Item>
    <ListGroup.Item>Departue Location:{post.departure_location}</ListGroup.Item>
    <ListGroup.Item>Departure Time:{post.departure_time}</ListGroup.Item>
    <ListGroup.Item>Car Type:{post.car_type}</ListGroup.Item>
    <ListGroup.Item>Resort:{post.resort}</ListGroup.Item>
    <ListGroup.Item>Rider Type:{post.ride_type}</ListGroup.Item>
    <ListGroup.Item>Rider Level:{post.rider_level}</ListGroup.Item>
  </ListGroup>
  <div className="btnfam">
    <Button variant="danger" onClick={() => deletePost(post.id)}>Delete Post</Button>
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

  {renderPost()}
  </>
)

}

export default Post;
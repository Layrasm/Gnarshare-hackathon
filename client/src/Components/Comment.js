import React,{useState,useEffect} from 'react';
import {Jumbotron, Button} from 'react-bootstrap'
import Axios from 'axios';

const Comment = ({post}) => {

  const [comments,setComments] = useState([]);

  const getComment = async () => {
    try{
      let res = await Axios.get(`api/posts/${post}/comments`) 
      setComments(res.data)
    } catch(error){
      console.log(error)
      alert("Error Getting Commments")
    }
  }

  useEffect(()=>{
    getComment();
  },[]);

  const deleteComment = (id) => {
    
    Axios.delete(`/api/posts/${post}/comments/${id}`, {params:{id:id} }).then(res => {
      console.log(res);

    setComments(comments.filter((comment)=>comment.id !== id))
      })
    }


const renderComment = () => {
  return comments.map((comment)=>(
    <Jumbotron key={comment.id}>
      <div className="commentCard">
      <h1>Name:{comment.name}</h1>
      <p>Body:{comment.body}</p>
      <hr />
      <p>Trip type:{comment.trip_type}</p>
      <p>Reserved Spots:{comment.res_spots}</p>
      <p>Pick Up Spots:{comment.pickup_spot}</p>
      <p>Passenger Ski Level:{comment.rider_level}</p>
      <p>Rider Type:{comment.rider_type}</p>
      </div>
      <br />
      <Button variant="warning"> Edit</Button>
      <Button variant="danger" onClick={() => deleteComment(comment.id)}>Delete Comment</Button>
  </Jumbotron>

  ));
}


return (
  <>
  {renderComment()}
  </>
)


}

export default Comment;
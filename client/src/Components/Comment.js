import React,{useState,useEffect} from 'react';
import {Jumbotron} from 'react-bootstrap'
import Axios from 'axios';

const Comment = () => {

  const [comments,setComments] = useState([]);

  const getComment = async () => {
    try{
      let res = await Axios.get("api/posts/id/comments") 
      setComments(res.data)
    } catch(error){
      console.log(error)
      alert("Error Getting Commments")
    }
  }

  useEffect(()=>{
    getComment();
  },[]);



  const addComment = (comment) => {
    setComments([...comments,comment]);
  };

const renderComment = () => {
  return comments.map((comment)=>(
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

  ));
}


return (
  <>
  </>
)


}

export default Comment;
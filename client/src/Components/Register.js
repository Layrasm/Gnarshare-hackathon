import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useFormInput } from "../customHooks/useFormInput";
import { AuthContext } from "../providers/AuthProvider";
import {Form,Button,Container} from 'react-bootstrap';

const Register = (props) => {
  const email = useFormInput("", "Email");
  const password = useFormInput("", "Password");
  const passwordConfrimation = useFormInput("", "Password Confirmation");
  const firstName = useFormInput("","First Name");
  const lastName = useFormInput("", "Last Name");



  const { handleRegister } = useContext(AuthContext);
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    //check valid email
    if (password.value !== passwordConfrimation.value) {
      alert("passwords don not match");
    } else {
    
      // register user
      handleRegister({
    
        email: email.value,
        password: password.value,
        passwordConfrimation: passwordConfrimation.value,
        first_name: firstName.value,
        last_name: lastName.value
      },
      history
      );
    }
  };
  return (
    <Container>
      <h1 className="landing">Register</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Label>Email</Form.Label>
        <Form.Control autoFocus {...email} />
        <Form.Label>First Name</Form.Label>
        <Form.Control autoFocus {...firstName} />
        <Form.Label>Last Name</Form.Label>
        <Form.Control autoFocus {...lastName} />
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" {...password} />
        <Form.Label>Password Confirmation</Form.Label>
        <Form.Control type="password" {...passwordConfrimation} />
        <br />
        <br />
        <Button variant="success" type="submit">Register</Button>
      </Form>
      <br />
      <Button variant="info" href="/">Back</Button>
    </Container>
  );
};

export default Register;

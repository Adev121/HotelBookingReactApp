import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Navbar from '../components/Navbar';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from 'react-hot-toast';
import "../components/Styling.css"

function Login() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async(data) => {
        try {
          console.log(data);
          const response = await axios.post("http://localhost:4000/api/User/login",data)
          console.log(response.data)
          toast.success("User login Successful")
          localStorage.setItem("UserInfo",JSON.stringify(response.data) )
          navigate('/')
        } catch (error) {
          console.log(error);
          toast.error(`${error.response.data.message}`)
        }
        
      }

  return (
    <>
    
    <Navbar/>
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header >
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {/* <p>Modal body text goes here.</p> */}
       
       {/* Form Comtrol*/}

       <Form>
      <Form.Group className="mb-3 m-2"  onSubmit={handleSubmit(onSubmit)}>
        <Form.Label>Email address</Form.Label>
        
        <Form.Control type="email" placeholder="name@example.com" {...register("email", { required: true })}/>
        {errors.email && <span className='error'>This field is required</span>}
      </Form.Group>
      <Form.Group className="mb-3 m-2" >
        <Form.Label>Password</Form.Label>
        
        <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        placeholder="*********"
        {...register("password", { required: true })}
      />
      {errors.password && <span  className='error'>This field is required</span>}
      </Form.Group>
    </Form>
    </Modal.Body>
        <Modal.Footer>
        <Link variant="primary" to="/register" >Not have an account!</Link>
          <Button variant="secondary" onClick={handleSubmit(onSubmit)}>Login</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
    </>

  )
}

export default Login

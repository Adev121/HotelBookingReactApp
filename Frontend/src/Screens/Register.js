import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Navbar from '../components/Navbar';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';
import "../components/Styling.css";

function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const userData = {
        name: data.name,
        email: data.email,
        password: data.password, // Include password here
      };

      console.log(data);
      await axios.post("http://localhost:4000/api/User/register", userData)
        .then((res) => {
          console.log(res.data);
          toast.success("User successfully created!");
          navigate('/login'); // Redirect to login after successful registration
        })
        .catch((err) => {
          toast.error(err.response?.data?.message || "Registration failed!");
        });
      
    } catch (error) {
      toast.error(`${error.response?.data?.message || "An error occurred!"}`);
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
      >
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Register</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3 m-2">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Name"
                  {...register("name", { required: true })}
                />
                {errors.name && <span className='error'>This field is required</span>}
              </Form.Group>
              
              <Form.Group className="mb-3 m-2">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  {...register("email", { required: true })}
                />
                {errors.email && <span className='error'>This field is required</span>}
              </Form.Group>
              
              <Form.Group className="mb-3 m-2">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  id="inputPassword5"
                  aria-describedby="passwordHelpBlock"
                  {...register("password", { required: true })}
                />
                {errors.password && <span className='error'>This field is required</span>}
              </Form.Group>
              
              <Button variant="primary" type="submit">
                Register
              </Button>
            </Form>
          </Modal.Body>
          
          <Modal.Footer>
            <Link to="/login" className="btn btn-secondary">Already have an account!</Link>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </>
  );
}

export default Register;

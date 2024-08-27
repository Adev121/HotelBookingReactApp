import React from 'react'
import Navbar from '../components/Navbar'
import { useForm } from "react-hook-form"
import "../components/Styling.css"
function Contact() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <>
    <Navbar/>
    <div className="container mt-5">
    <h2 className="text-center mb-4">Contact Us</h2>
    <div className="row">
      <div className="col-md-6 offset-md-3 border border-grey rounded-lg py-4 contact-Form">
        <form>
          <div className="form-group">
            <label for="name">Name</label>
            <input type="text" className="form-control my-2" id="name" placeholder="Enter your name" {...register("name", { required: true })}/>
            {errors.name && <span className='error'>This field is required</span>}
          </div>
          <div className="form-group">
            <label for="email">Email address</label>
            <input type="email" className="form-control my-2" id="email" placeholder="Enter your email" {...register("email", { required: true })}/>
            {errors.email && <span className='error'>This field is required</span>}
          </div>
          <div className="form-group">
            <label for="message">Message</label>
            <textarea className="form-control my-2" id="message" rows="5" placeholder="Enter your message" {...register("message", { required: true })}></textarea>
            {errors.message && <span className='error'>This field is required</span>}
          </div>
          <div className='d-flex justify-content-center align-middle'>
          <button type="submit" className="btn btn-primary btn-block my-4 px-4" onClick={handleSubmit(onSubmit)}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>

    </>
  )
}

export default Contact

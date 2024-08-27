import React from 'react'
import Navbar from '../components/Navbar'


function About() {
  return (
    <>
    <Navbar/>
    <div className="container mt-5">
    <h2 className="text-center mb-4">About Us</h2>
    <div className="row">
      <div className="col-md-8 offset-md-2">
        <p>
          Welcome to our company! We are committed to providing the best services and products to our customers.
          Our team is composed of dedicated professionals who strive to exceed expectations in everything we do.
        </p>
        <p>
          We believe in continuous improvement and innovation, and we work hard to stay ahead of the curve in our industry.
          Our mission is to make a positive impact on our community and the world by delivering value and excellence in every aspect of our business.
        </p>
        <p>
          Thank you for choosing us. We look forward to serving you and building a lasting relationship.
        </p>
      </div>
    </div>
  </div>
    </>
  )
}

export default About

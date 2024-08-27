import React, { useState } from "react";
import "./Styling.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {  useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


function RoomsCards({ item ,checkin , checkout}) {
  const navigate = useNavigate();
  console.log(item);
  console.log(checkin);
  console.log(checkout);
  const [lgShow, setLgShow] = useState(false);

  const handleClose = () => setLgShow(false);
  const handleShow = () => setLgShow(true);

  const handleBooking = () => {
    if (checkin && checkout) {
      navigate(`/booking/${item._id}/${checkin}/${checkout}`);
    } else {
      // navigate('/error');
      toast.error("Please select the CheckIn and CheckOut dates !")
    }
  };
  return (
    <>
      <div className="card card-room" style={{ width: "110rem", margin: "25px" }}>
        <div className="d-flex justify-content-center align-items-center">
          {/* Image body */}
          <img src={item.imageurls[0]} className="image-room" alt="..." />

          {/* Card Body */}
          <div className="card-body">
            <h2 className="RoomsName">{item.name}</h2>
            <h4>Max Count : {item.maxcount}</h4>
            <h4>Phone Number : {item.phonenumber}</h4>
            <h4>Room Type : {item.type}</h4>
            <h3 className="rent">Rent/Day : Rs.{item.rentperday}</h3>
          </div>
          <button className="btn btn-primary detailsBtn" onClick={handleShow}>
            View Details
          </button>
        </div>
      </div>
      {/* Modal */}

      <Modal show={lgShow} size="lg" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{item.name}</Modal.Title>
        </Modal.Header>
        {/* Carousel */}
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            {            
            item.imageurls.map((imageUrl, index) => (
                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                    <img src={imageUrl} className="d-block w-100" alt="..." />
                </div>
            ))
            
            }
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <Modal.Body className="card-desctipion">{item.description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
          <Button variant="primary" onClick={handleBooking}>Book Now</Button>
          
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RoomsCards;

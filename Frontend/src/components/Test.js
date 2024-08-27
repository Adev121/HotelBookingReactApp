import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Styling.css'
import Navbar from './Navbar';
function Test() {
  return (
    <>
    <Navbar/>
    <div
      className="modal show booking-container"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog size='xl' className='dialog-booking'>
                 <Modal.Body>
        <div className='row'>
            <div className='col-lg-6' style={{fontSize:"20px",textAlign:"center",fontWeight:"bold"}}>OYO Flagship 75243 Metro International<hr/>
                <img src='https://images.oyoroomscdn.com/uploads/hotel_image/57811/ddbsgomwexqs.jpg' className='booking-img'/>
            </div>
            <div className='col-lg-6' style={{fontSize:"20px",textAlign:"center",fontWeight:"bold"}}>Booking Details<hr/>
                <div className='booking-data'>
                    <h3 className=''><b>Name:</b> John Doe</h3><hr/>
                    <h3 className=''><b>Email:</b> johndoe@example.com</h3><hr/>
                    <h3 className=''><b>Phone:</b> 9876543210</h3><hr/>
                    <h3 className=''><b>Check-In:</b> 12th Feb, 2022</h3><hr/>
                    <h3 className=''><b>Check-Out:</b> 15th Feb, 2022</h3><hr/>
                    <h3 className=''><b>Total Amount:</b> Rs. 3,500</h3><hr/>
                </div>
            </div>
        </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="success">Pay Now</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
    
    </>
  )
}

export default Test

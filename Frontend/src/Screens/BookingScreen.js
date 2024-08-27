import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../components/Styling.css'
import Navbar from '../components/Navbar';
import Loader from '../components/Loader';
import moment from 'moment'


function BookingScreen() {
  const [loading, setLoading] = useState(true);
    const {roomid,checkin,checkout} = useParams()
    const [room,setroom]=useState([]);

   // Convert checkin and checkout to moment objects
   const checkinDate = moment(checkin, 'DD-MM-YYYY');
   const checkoutDate = moment(checkout, 'DD-MM-YYYY');
 
   // Calculate the total number of days
   const totaldays = moment.duration(checkoutDate.diff(checkinDate)).asDays();
   console.log(totaldays);
  // Calculating Price 
  const totalRent = totaldays*(room.rentperday);
  console.log(totalRent)

  console.log(totaldays)
    useEffect(() => {
        const fetchId = async()=>{
            try {
                const RoomId =(await axios.post('http://localhost:4000/api/Rooms/getId',{roomid: roomid})).data;
                console.log(RoomId);
                setroom(RoomId);
                console.log(room);
                
                setTimeout(()=>{
                  setLoading(false)
                },1000)
                
            } catch (error) {
              setLoading(false)
                console.log(error)
          }
        }
        fetchId();
    },[])
  return (
    <>
    <Navbar/>
    {loading ?(<h1><Loader/></h1>):(
    <div>
    {/* Booking Screen
    <h1>Room id = {roomid}</h1> */}
  <div
    className="modal show booking-container"
    style={{ display: 'block', position: 'initial' }}
  >
    <Modal.Dialog size='xl' className='dialog-booking'>
               <Modal.Body>
      <div className='row'>
          <div className='col-lg-6' style={{fontSize:"20px",textAlign:"center",fontWeight:"bold"}}>{room.name}<hr/>
              <img src={room.imageurls && room.imageurls[0]} className='booking-img'/>
          </div>
          <div className='col-lg-6' style={{fontSize:"20px",textAlign:"center",fontWeight:"bold"}}>Booking Details<hr/>
              <div className='booking-data'>
                  <h3 className=''><b>Name:</b>johndoe</h3><hr/>
                  <h3 className=''><b>Email:</b> johndoe@example.com</h3><hr/>
                  <h3 className=''><b>Phone:</b> 9876543210</h3><hr/>
                  <h3 className=''><b>Check-In:  </b>{checkin}</h3><hr/>
                  <h3 className=''><b>Check-Out: </b> {checkout}</h3><hr/>
                  <h3 className=''><b>No. Of Nights: </b> {totaldays}</h3><hr/>
                  <h3 className=''><b>Total Amount : </b>{totalRent}</h3><hr/>
              </div>
          </div>
      </div>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="success">Pay Now</Button>
      </Modal.Footer>
    </Modal.Dialog>
  </div>
  </div>
    )
    }
    </>
    
  )
}

export default BookingScreen

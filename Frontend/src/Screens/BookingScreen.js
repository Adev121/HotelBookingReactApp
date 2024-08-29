import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../components/Styling.css';
import Navbar from '../components/Navbar';
import Loader from '../components/Loader';
import moment from 'moment';
import toast from 'react-hot-toast';

function BookingScreen() {
  const [loading, setLoading] = useState(true);
  const [room, setRoom] = useState({});
  const [totalRent, setTotalRent] = useState(0);
  const [totalDays, setTotalDays] = useState(0);

  const { roomid, checkin, checkout } = useParams();
  const UserInfo = JSON.parse(localStorage.getItem("UserInfo"));

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const { data } = await axios.post('http://localhost:4000/api/Rooms/getId', { roomid });
        setRoom(data);

        // Convert checkin and checkout to moment objects
        const checkinDate = moment(checkin, 'DD-MM-YYYY');
        const checkoutDate = moment(checkout, 'DD-MM-YYYY');
        const days = moment.duration(checkoutDate.diff(checkinDate)).asDays();
        setTotalDays(days);
        setTotalRent(days * data.rentperday);

        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    };

    if (roomid && checkin && checkout) {
      fetchRoom();
    }
  }, [roomid, checkin, checkout]); // Added dependencies here

  const handleBooking = async () => {
    if(UserInfo){
      const bookingDetails = {
        room,
        userid: UserInfo.user._id,
        userName:UserInfo.user.name,
        checkin,
        checkout,
        totalamount: totalRent,
        totalNights: totalDays,
      };
  
      try {
        await axios.post("http://localhost:4000/api/Bookings/booking", bookingDetails);
        // Handle successful booking (e.g., redirect or show confirmation)
        toast.success("Yay ! Room is Booked")
      } catch (error) {
        console.error(error.message);
      }
    }
    else{
      toast.error("Please Login First")
      return;
    }
    
  };

  return (
    <>
      <Navbar />
      {loading ? (
        <h1><Loader /></h1>
      ) : (
        <div>
          <div
            className="modal show booking-container"
            style={{ display: 'block', position: 'initial' }}
          >
            <Modal.Dialog size='xl' className='dialog-booking'>
              <Modal.Body>
                <div className='row'>
                  <div className='col-lg-6' style={{ fontSize: "20px", textAlign: "center", fontWeight: "bold" }}>
                    {room.name}<hr />
                    <img src={room.imageurls && room.imageurls[0]} className='booking-img' alt="Room" />
                  </div>
                  <div className='col-lg-6' style={{ fontSize: "20px", textAlign: "center", fontWeight: "bold" }}>
                    Booking Details<hr />
                    <div className='booking-data'>
                      <h3><b>Name:</b> {UserInfo?UserInfo.user.name: null }</h3><hr />
                      <h3><b>Email:</b> {UserInfo?UserInfo.user.email: null }</h3><hr />
                      <h3><b>Phone:</b> 9876543210</h3><hr />
                      <h3><b>Check-In: </b>{checkin}</h3><hr />
                      <h3><b>Check-Out: </b>{checkout}</h3><hr />
                      <h3><b>No. Of Nights: </b>{totalDays}</h3><hr />
                      <h3><b>Total Amount: </b>{totalRent}</h3><hr />
                    </div>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="success" onClick={handleBooking}>Pay Now</Button>
              </Modal.Footer>
            </Modal.Dialog>
          </div>
        </div>
      )}
    </>
  );
}

export default BookingScreen;

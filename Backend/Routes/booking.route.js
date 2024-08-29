import express from 'express'
import Booking from '../Models/booking.model.js';

const bookingRoute = express.Router();

//Booking Controller

bookingRoute.post('/booking', async(req, res) => {
    const {
        room,
        userid,
        userName,
        checkin,
        checkout,
        totalamount,
        totalNights,
      } = req.body;

  try {
    const newBooking = await new Booking({
        room: room.name,
        roomid: room._id,
        userid,
        userName,
        checkin,
        checkout,
        totalamount,
        totalNights,
        transactionId:'111111111'
    });
    const savedBooking = await newBooking.save();
    res.status(201).json(savedBooking);

  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
});

export default bookingRoute;
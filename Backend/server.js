import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import roomsRoute from './Routes/roomsroute.js';
import userRoute from './Routes/user.route.js';
import bookingRoute from './Routes/booking.route.js';
import cors from 'cors'
dotenv.config();

// Middleware
const app = express();
app.use(cors())

//Get credentials from .env file
const port = process.env.PORT || 5000;
const Mongourl = process.env.MongoURL;

app.use(express.json())
// Connect to MongoDB
const url = Mongourl;
 async function data() {
    try {
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
   
    } catch (err) {
        console.error(err);
    }

}

data();
app.listen(port, () => console.log(`Server running at port ${port}`));

//Defining routes in server.js

app.use("/api/Rooms",roomsRoute);
app.use("/api/User",userRoute);
app.use("/api/Bookings",bookingRoute);


// endpoint: http://localhost:4000/api/rooms/allRooms/
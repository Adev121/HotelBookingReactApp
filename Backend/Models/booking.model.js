import mongoose from 'mongoose'

const BookingSchema = mongoose.Schema({
    room:{
        type: String,
        required: true
    },
    roomid:{
        type: String,
        required: true
    },
    userid:{
        type: String,
        required: true
    },
    checkin:{
        type: String,
        required: true
    },
    checkout:{
        type: String,
        required: true
    },
    totalamount:{
        type: Number,
        required: true
    },
    totalNights:{
        type: Number,
        required: true
    },
    transactionId:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true,
        default: 'Booked'
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

const Booking = mongoose.model('Booking', BookingSchema);
export default Booking;
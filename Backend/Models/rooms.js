
import mongoose from "mongoose";

const roomSchema = mongoose.Schema({
   name:{
     type:String,
     required:true
   },
   maxcout:{
     type:Number,
     required:true
   },
   phone:{
     type:Number,
     required:true
   },
   RentPerDay:{
     type:Number,
     required:true
   },
   type:{
     type:String,
     required:true
   },
   imageUrl:[],
   currentBooking : [],
   description:{
     type:String,
     required:true
   },
},{
    timeStamps:true
})

const rooms = mongoose.model('Rooms', roomSchema);

export default rooms;
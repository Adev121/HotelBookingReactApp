import express from "express";
import rooms from "../Models/rooms.js";



const roomsRoute =  express.Router()

//Controller
const getRooms =  async (req,res)=>{
    try {
        const roomsData = await rooms.find();
        res.status(200).json(roomsData);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}


export const getId =  async (req,res)=>{
    const roomid = req.body.roomid;
    try {
        const room = await rooms.findOne({_id:roomid})
        res.send(room)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}



//defining Routes
roomsRoute.get('/allRooms',getRooms)
roomsRoute.post('/getId',getId)


export default roomsRoute;  //exporting the router for use in app.js file.



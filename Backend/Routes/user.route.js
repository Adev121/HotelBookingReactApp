import User from "../Models/user.model.js";
import express from 'express'

const userRoute = express.Router()

//User Controller

export const register= async(req,res)=>{
    try {
        const {name,email,password} = req.body;
        const user =await User.findOne({email})
        if(user){
            console.log('User already exists');
            return res.status(400).json({message: 'User already exists'})
            
        }
        else
        {
            const newUser =await new User({name,email,password});
            await newUser.save();
            console.log('User registered successfully');
            return res.status(201).json({message: 'User registered successfully',user:
                {
                    name: newUser.name,
                    email: newUser.email,
                    password: newUser.password
                }
            })
            
        }
        
    } catch (error) {
        res.status(500).json(error.message);
        console.log(error.message)
    }
}

//Login controller
export const login= async(req,res)=>{
    try {
        const {email,password} = req.body;
        const user =await User.findOne({email})
        if(user){
           if(password==user.password)
           {
             res.status(200).json({message: 'User logged in successfully',user})
             console.log('User logged in successfully');
             console.log(user)
             
           }
           else
           {
             res.status(200).json({message: 'Invalid Password'})
             console.log('Invalid Password');
           }
        }
        else
        {
            res.status(400).json({message: 'User is not registered !'})
             console.log('User is not registered !');
        }
        
    } catch (error) {
        res.status(500).json(error.message);
        console.log(error.message)
    }
}



userRoute.post("/register",register)
userRoute.post("/login",login)

export default userRoute;  //exporting the router for use in app.js file.


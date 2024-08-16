import { Int32, ObjectId } from 'mongodb';
import { db } from './../../../../database/connection.js';
import bcryptjs from 'bcryptjs'

//signup
export const signUp=async(req,res,next)=>{
    const{email,password}=req.body
    const emailExist=await db.collection('customers').findOne({email})
    if(emailExist){
        return res.status(409).json({message:'email is already exists'})
    }
    const salt=bcryptjs.genSaltSync()
    req.body.password=bcryptjs.hashSync(password,salt)
    // req.body.phone=new Int32(phone)
    await db.collection('customers').insertOne(req.body)
    return res.status(201).json({message:'created'})
}

//login
export const login=async(req,res,next)=>{
    const{email,password}=req.body
    const userExist=await db.collection('customers').findOne({email})
    if(userExist){
        const match=bcryptjs.compareSync(password,userExist.password)
        if(match){
            return res.status(200).json({message:'login successully'})
        }
        return res.status(400).json({message:'invalid email or password'})

    }
    return res.status(400).json({message:'invalid email or password'})
}


// Get a specific user.
export const specificUser=async(req,res,next)=>{
    const{id}=req.params
    const user=await db.collection('customers').findOne({_id:new ObjectId(id)})
    if(user){
    return res.status(200).json({message:'user is:',user})

    }
    return res.status(404).json({message:'user is not found'})

}

//get all users
export const allUsers=async (req,res,next)=>{
    const users=await db.collection('customers').find().toArray()
    return res.status(200).json({message:'users is:',users})
}


//update user
export const update=async(req,res,next)=>{
    const{id}=req.params
    const {userId,userName,phone}=req.body
    if(id==userId){
            const updated=await db.collection('customers').updateOne({_id:new ObjectId(id)},{
                $set:{userName,phone}
            })
            return updated.modifiedCount ?res.status(200).json({message:"updated successfully"}):res.status(400).json({message:"user is not found"})


    }
    return res.status(400).json({message:"you are ot the owner"})
}


//delete user
export const deleteUser=async(req,res,next)=>{
    const{id}=req.params
    const {userId}=req.body
    if(id==userId){
            const delted=await db.collection('customers').deleteOne({_id:new ObjectId(id)})
            return delted.deletedCount ?res.status(200).json({message:"deleted successfully"}):res.status(404).json({message:"user is not found"})

    }
    return res.status(400).json({message:"you are ot the owner"})
}

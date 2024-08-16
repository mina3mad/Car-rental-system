import { ObjectId } from "mongodb";
import { db } from "../../../../database/connection.js";

//add car
export const addCar=async(req,res,next)=>{
    const{name,model}=req.body
    await db.collection('cars').insertOne({name,model,rentalStatus:"available"})
    return res.status(201).json({message:"car created successfully"})
}


// Get a specific car.
export const specificCar=async(req,res,next)=>{
    const{id}=req.params
    const car=await db.collection('cars').findOne({_id:new ObjectId(id)})
    if(car){
    return res.status(200).json({message:'car is:',car})

    }
    return res.status(404).json({message:'car is not found'})

}

//get all cars
export const allCars=async (req,res,next)=>{
    const cars=await db.collection('cars').find().toArray()
    return res.status(200).json({message:'cars is:',cars})
}


//update car
export const update=async(req,res,next)=>{
    const{id}=req.params
    const {name ,model}=req.body
            const updated=await db.collection('cars').updateOne({_id:new ObjectId(id)},{
                $set:{name,model}
            })
            return updated.modifiedCount ?res.status(200).json({message:"updated successfully"}):res.status(400).json({message:"car is not found"})

}


//delete car
export const deleteCar=async(req,res,next)=>{
    const{id}=req.params
        const delted=await db.collection('cars').deleteOne({_id:new ObjectId(id)})
        return delted.deletedCount ?res.status(200).json({message:"deleted successfully"}):res.status(404).json({message:"car is not found"})

}

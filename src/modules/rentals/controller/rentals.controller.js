import { ObjectId } from 'mongodb';
import { db } from './../../../../database/connection.js';


//add rental 
export const addRental=async(req,res,next)=>{
    const{customerId,carId,rentalDate,returnDate}=req.body
    const userExist=await db.collection('customers').findOne({_id:new ObjectId(customerId)})
    
    if(!userExist)
        return res.status(404).json({message:"user is not found"})
    const carExist=await db.collection('cars').findOne({_id:new ObjectId(carId)})
    if(!carExist)
        return res.status(404).json({message:"car is not found"})

    if(carExist.rentalStatus=="available"){
    await db.collection('cars').updateOne({_id:new ObjectId(carId)},{$set:{rentalStatus:"rented"}})
    await db.collection('rentals').insertOne({
        customerId:new ObjectId(customerId),
        carId:new ObjectId(carId),
        rentalDate:new Date(rentalDate),
        returnDate:new Date(returnDate)})
        return res.status(201).json({message:"car is rented"})

    }else{
        return res.status(400).json({message:"car is not available for rent"})
    }

}


// Get a specific rental.
export const specificRental=async(req,res,next)=>{
    const{id}=req.params
    const rental=await db.collection('rentals').findOne({_id:new ObjectId(id)})
    if(rental){
        
    rental.rentalDate=rental.rentalDate.toISOString().slice(0,10)
    rental.returnDate=rental.returnDate.toISOString().slice(0,10)
    return res.status(200).json({message:'rental is:',rental})

    }
    return res.status(404).json({message:'rental is not found'})

}

//get all cars
export const allRentals=async (req,res,next)=>{
    const rentals=await db.collection('rentals').find().toArray()
    rentals.map((element)=>{
        element.rentalDate=element.rentalDate.toISOString().slice(0,10)
        element.returnDate=element.returnDate.toISOString().slice(0,10)
        return element
    })
    return res.status(200).json({message:'rentals is:',rentals})
}


//update rental
export const update=async(req,res,next)=>{
    const{id}=req.params
    const {rentalDate ,returnDate}=req.body
            const updated=await db.collection('rentals').updateOne({_id:new ObjectId(id)},{
                $set:{rentalDate:new Date(rentalDate) ,returnDate:new Date(returnDate)}
            })
            return updated.modifiedCount ?res.status(200).json({message:"updated successfully"}):res.status(400).json({message:"rental is not found"})

}


//delete car
export const deleteRental=async(req,res,next)=>{
    const{id}=req.params
        const deleted=await db.collection('rentals').deleteOne({_id:new ObjectId(id)})
        return deleted.deletedCount ?res.status(200).json({message:"deleted successfully"}):res.status(404).json({message:"rental is not found"})

}

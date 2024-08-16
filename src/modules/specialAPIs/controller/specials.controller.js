import { db } from './../../../../database/connection.js';


//Get all cars whose model is ‘Honda’ and ‘Toyota’ 
export const func1=async(req,res,next)=>{
    const cars=await db.collection('cars').find({model:{$in:['honda','toyota']}}).toArray()    
    return cars.length?res.status(200).json({Message:'cars is:',cars}):res.status(404).json({Message:"cars is not found"})
}


//Get Available Cars of a Specific Model.
export const func2=async(req,res,next)=>{
    const{model}=req.params
    const cars=await db.collection('cars').find({model:model,rentalStatus:'available'}).toArray()
    return cars.length?res.status(200).json({Message:'cars is:',cars}):res.status(404).json({Message:"cars is not found"})

}


//Get Cars that are Either rented or of a Specific Model.
export const func3=async(req,res,next)=>{
    const{model}=req.query
    let cars;
    if (model){
    cars=await db.collection('cars').find({model:model}).toArray()

    }
    else{
    cars=await db.collection('cars').find({rentalStatus:"rented"}).toArray()

    }
    return cars.length?res.status(200).json({Message:'cars is:',cars}):res.status(404).json({Message:"cars is not found"})

}


//Get Available Cars of Specific Models or Rented Cars of a Specific Model
export const func4=async(req,res,next)=>{
    const{model}=req.query
    const cars=await db.collection('cars').find({$or:[{rentalStatus:"available",model},{rentalStatus:"rented",model}]}).toArray()
    return cars.length?res.status(200).json({Message:'cars is:',cars}):res.status(404).json({Message:"cars is not found"})

}
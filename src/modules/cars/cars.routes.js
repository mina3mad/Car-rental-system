import { Router } from "express";
import * as carController from './controller/cars.controller.js'
const carRouter=Router()
carRouter.post('/add',carController.addCar)
carRouter.get('/specificCar/:id',carController.specificCar)
carRouter.get('/allCars',carController.allCars)
carRouter.patch('/update/:id',carController.update)
carRouter.delete('/delete/:id',carController.deleteCar)
export default carRouter
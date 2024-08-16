import { Router } from "express";
import * as rentalController from './controller/rentals.controller.js'
const rentalRouter=Router()
rentalRouter.post('/add',rentalController.addRental)
rentalRouter.get('/specificRental/:id',rentalController.specificRental)
rentalRouter.get('/allRentals',rentalController.allRentals)
rentalRouter.patch('/update/:id',rentalController.update)
rentalRouter.delete('/delete/:id',rentalController.deleteRental)
export default rentalRouter
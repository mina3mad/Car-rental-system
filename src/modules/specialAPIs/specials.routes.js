import { Router } from "express";
import * as specialController from './controller/specials.controller.js'
const router=Router()
router.get('/hondaToyotaCars',specialController.func1)
router.get('/specificCars/:model',specialController.func2)
router.get('/carModelOrRented',specialController.func3)
router.get('/availableOrRented',specialController.func4)
export default router
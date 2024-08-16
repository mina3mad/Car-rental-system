import { Router } from "express";
import * as customerController from "./controller/customers.controller.js";
const router=Router()
router.post('/signUp',customerController.signUp)
router.post('/login',customerController.login)
router.get('/specificUser/:id',customerController.specificUser)
router.get('/allUsers',customerController.allUsers)
router.patch('/update/:id',customerController.update)
router.delete('/delete/:id',customerController.deleteUser)

export default router
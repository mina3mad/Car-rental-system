import customerRouter from'./modules/customers/customers.routes.js'
import carRouter from './modules/cars/cars.routes.js';
import rentalRouter from './modules/rentals/rentals.routes.js';
import specialRouter from './modules/specialAPIs/specials.routes.js'
const bootstrap=(app,express)=>{
    app.use(express.json())
    app.use('/customers',customerRouter)
    app.use('/cars',carRouter)
    app.use('/rentals',rentalRouter)
    app.use('/specials',specialRouter)
    app.use('*',(req,res,next)=>{
        res.json({message:"not found"})
    })
}
export default bootstrap

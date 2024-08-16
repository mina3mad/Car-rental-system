import express from 'express'
import cors from 'cors'
import bootstrap from './src/bootstrap.js'
const app = express()
app.use(cors())
bootstrap(app,express)
const port = process.env.PORT ||3000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


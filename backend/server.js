import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'

import productRoutes from './routes/productRouter.js'

dotenv.config()

connectDB()

const app = express();
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('API running.....')
})

app.use('/api/products', productRoutes)

app.listen(PORT, () => {
  console.log(`app running in ${process.env.NODE_ENV} port ${PORT}`.yellow.bold)
})
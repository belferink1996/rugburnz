import mongoose from 'mongoose'
import { MONGO_URI } from '../constants'

const connection = {}

const connectDB = async () => {
  if (connection.isConnected) return

  try {
    const db = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    connection.isConnected = db.connections[0].readyState
    console.log('✅ MongoDB connected:', connection.isConnected)
  } catch (error) {
    console.log('❌ MongoDB connection error:', error.message)
    throw error
  }
}

module.exports = connectDB

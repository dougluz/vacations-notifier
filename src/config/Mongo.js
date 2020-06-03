import mongoose from 'mongoose'

function connection () {
  return mongoose.connect('mongodb://localhost:27017/vacations', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    socketTimeoutMS: 0,
    connectTimeoutMS: 0
  })
}

export default connection
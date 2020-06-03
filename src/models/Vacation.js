import mongoose from 'mongoose'

const VacationSchema = new mongoose.Schema({
  name: mongoose.Schema.Types.String,
  return: mongoose.Schema.Types.Date,
  start: mongoose.Schema.Types.Date,
  end: mongoose.Schema.Types.Date
})

const Vacations = mongoose.model('Vacations', VacationSchema)

export default Vacations
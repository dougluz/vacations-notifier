import Vacations from '../controllers/VacationsController'
// const today = new Date()
// const tomorrow = new Date(today)
// tomorrow.setDate(tomorrow.getDate() + 1)
const tomorrow = new Date('2020-06-08')


export const goingOnVacations = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const startingVacations = await Vacations.find({ start: tomorrow })
      resolve(startingVacations)
    } catch (error) {
      reject(error)
    }
  }) 
}

export const returningFromVacations = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const returningVacations = await Vacations.find({ return: tomorrow })
      resolve(returningVacations)
    } catch (error) {
      reject(error)
    }
  })
}

export const verifyVacations = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const going = await goingOnVacations()
      const returning = await returningFromVacations()
      resolve([going, returning])
    } catch (error) {
      reject(error)
    }
  })
}
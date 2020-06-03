import Vacations from '../models/Vacation'

class VacationsController {
  static async create (data) {
    try {
      const vacation = {
        name: data.Colaborador,
        return: data.Retorno,
        start: data.dates[0],
        end: data.dates[1]
      }
      let result = await Vacations.findOne(vacation)

      if (!result) {
        result = await Vacations.create(vacation)
      }

      return result
    } catch (error) {
      console.log(error)
    }
  }
}

export default VacationsController
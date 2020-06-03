import { readFile } from './src/utils/File'
import { formatDates } from './src/utils/Dates'
import Vacations from './src/controllers/VacationsController'

import connection from './src/config/Mongo'

function main () {

  connection()

  readFile()
    .then(vacations => formatDates(vacations))
      .then(formated => formated.forEach(data => Vacations.create(data)))
        .then(console.log('importação concluida com sucesso'))
          .catch(error => console.log(error))
}

main()

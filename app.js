import { CronJob } from 'cron'
import { readFile, copyFile } from './src/utils/File'
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

const parseData = new CronJob('0 0 23 * * *', () => {
  main(),
  null,
  false,
  'America/Sao_Paulo'
})

parseData.start()
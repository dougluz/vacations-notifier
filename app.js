import { CronJob } from 'cron'
import { readFile, copyFile } from './src/utils/File'
import { formatDates } from './src/utils/Dates'
import Vacations from './src/controllers/VacationsController'

import dotenv from 'dotenv'

dotenv.config()

import { connection, closeConnection } from './src/config/Mongo'
import { verifyVacations } from './src/utils/Vacations'
import { sendMail } from './src/utils/Mail'

function parse () {
  connection()
  readFile()
    .then(vacations => formatDates(vacations))
      .then(formated => formated.forEach(data => Vacations.create(data)))
        .then(console.log('importação concluida com sucesso'))
          .catch(error => console.log(error))
}

function mail () {
  connection()
  verifyVacations()
    .then(vacations => {
      if (vacations[0].length > 0 || vacations[1].length > 0) {
        sendMail(vacations)
      } else {
        console.log('Não existem registros para serem enviados no momento')
      }
    }
  )
}
  
const parseJob = new CronJob('0 */3 * * * *', () => {
  parse(),
  null,
  false,
  'America/Sao_Paulo'
})

const mailJob = new CronJob('0 */1 * * * *', () => {
  mail(),
  null,
  false,
  'America/Sao_Paulo'
})

parseJob.start()
mailJob.start()
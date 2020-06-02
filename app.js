import { readFile } from './src/File'
import { formatDates } from './src/Dates'

function main () {
  readFile('\\files\\Férias.ods')
    .then(vacations => formatDates(vacations))
    .catch(error => console.log(error))
}

main()

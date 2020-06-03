import path from 'path'
import xlsx from 'xlsx'

export const readFile = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const file = xlsx.readFile(path.resolve(__dirname, '..', 'files', 'Férias.ods'), { cellDates: true})
      let data = xlsx.utils.sheet_to_json(file.Sheets[file.SheetNames[0]]);
      resolve(data)
    } catch (error) {
      reject(error)
    }
  })
}
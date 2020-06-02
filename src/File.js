import xlsx from 'xlsx'

export const readFile = (path) => {
  return new Promise(async (resolve, reject) => {
    try {
      const file = xlsx.readFile(`${__dirname}${path}`, { cellDates: true})
      let data = xlsx.utils.sheet_to_json(file.Sheets[file.SheetNames[0]]);
      resolve(data)
    } catch (error) {
      reject(error)
    }
  })
}

export const formatDates = (vacations) => {
  vacations.map(item => {
    splitDates(item)
      .then(item => stringToDate(item))
        .then(item => item)
  })
}

const splitDates = (vacations) => {
  return new Promise((resolve, reject) => {
    try {
      const dates = vacations['Período Férias'].split(' ')
      vacations['dates'] = [dates[0], dates[2]]
      delete vacations['Período Férias']
      resolve(vacations)
    } catch (error) {
      reject(error)
    }
  })
}

const stringToDate = (item) => {
  return new Promise((resolve, reject) => {
    try {
      item.dates = item.dates.map(date => new Date (20 + date.split('/').reverse().join('-')))
      resolve(item)
    } catch (error) {
      reject(error)
    }
  })
}
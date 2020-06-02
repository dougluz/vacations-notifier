
export const formatDates = (vacations) => {
  vacations.map(item => {
    splitDates(item['Período Férias'])
      .then(dates => console.log(dates))
  })
}

const splitDates = (date) => {
  return new Promise((resolve, reject) => {
    try {
      const dates = date.split(' ')
      resolve([dates[0], dates[2]])
    } catch (error) {
      reject(error)
    }
  })
}
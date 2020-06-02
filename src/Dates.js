
export const formatDates = (vacations) => {
  vacations.map(item => {
    console.log(stringToDate(item['Período Férias']))
  })
}

const stringToDate = (date) => {
  const dateArray = date.split(' ')
  delete dateArray[1]
  return dateArray
}
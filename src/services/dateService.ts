export class DateService {
  static splitVacationPeriod(period: string) {
    let splittedVacationPeriod = period.split(' ');
    delete splittedVacationPeriod?.[1];
    const formattedDates = splittedVacationPeriod.map((item) =>
      this.toLocaleDateFormat(item)
    );
    return [formattedDates?.[0], formattedDates?.[2]];
  }
  static toLocaleDateFormat(date: string) {
    if (this.validDateFormat(date)) {
      const splitted = date.split('/');
      if (splitted[2].length < 4) {
        splitted[2] = `20${splitted[2]}`;
      }
      return `${splitted[0]}/${splitted[1]}/${splitted[2]}`;
    } else if (date == null) {
      return null
    }
    else {
      throw new Error('Invalid date Format');
    }
  }

  static localeDateToNewDate(date: string | null) {
    if (date) {
      const reversedDate = date.split('/').reverse().join('/');
      const newDate = new Date(reversedDate);
      return newDate;
    } else {
      return null
    }
  }

  static validDateFormat(date: string) {
    return /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.test(
      date
    );
  }
}

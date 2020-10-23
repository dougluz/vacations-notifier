import { getVacationsFormatted } from '@src/client/fileClient';
import { Vacation } from '@src/models/vacationModel';

export const saveVacations = async () => {
  try {
    const vacations = await getVacationsFormatted();
    for (let i = 0; i < vacations.length; i++) {
        const vacation = new Vacation(vacations[i]);
        const exists = await Vacation.findOne(vacations[i])
        if (!exists) {
            await vacation.save();
        }
    }
    return true
  } catch (error) {
    throw new Error(error.message);
  }
};

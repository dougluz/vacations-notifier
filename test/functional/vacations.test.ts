import { Vacation } from '@src/models/vacationModel';
import { VacationController } from '@src/controllers/vacationController';
import { DateService } from '@src/services/dateService';

describe('Vacations functional tests', () => {
  beforeAll(async () => await Vacation.deleteMany({}));
  describe('when creating a vacation', () => {
    it('should return the created vacation', async function () {
      const newVacation: Vacation = {
        employee: 'Douglas de Souza Luz',
        start: new Date(),
        end: new Date(),
        return: new Date(),
      };
      const vacationController = new VacationController();
      const created = await vacationController.create(newVacation);
      expect(created).toEqual(expect.objectContaining(newVacation));
    });
    it('should throw a error when there is a validation error', async function () {
      const newVacation = {
        employee: 'Douglas de Souza Luz',
        start: 'invalid string',
        end: new Date(),
        return: new Date(),
      };
      const vacationController = new VacationController();
      expect(() => vacationController.create(newVacation as any)).toThrow();
    });
  });
});

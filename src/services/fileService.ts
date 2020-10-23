import xlsx from 'xlsx';
import path from 'path';

export interface VacationsRegisters {
  Colaborador: string;
  'Período Férias': string;
  Retorno: Date;
  Bloqueado: string;
  Liberado: string;
}

export class FileService {
  async readFile(): Promise<Array<VacationsRegisters>> {
    return new Promise(async (resolve, reject) => {
      try {
        const file = xlsx.readFile(
          path.resolve(__dirname, '..', 'file', 'Ferias.ods'),
          { cellDates: true }
        );
        const fileData: Array<VacationsRegisters> = xlsx.utils.sheet_to_json(
          file.Sheets[file.SheetNames[0]]
        );
        resolve(fileData);
      } catch (error) {
        reject(error);
      }
    });
  }
}

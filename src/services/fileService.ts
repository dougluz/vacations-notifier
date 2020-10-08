import xlsx from 'xlsx'
import path from "path";

export interface VacationsRegisters {
    name: string,
    period: string,
    return: string,
    accessBlocked: string
    accessLiberated: string
}

export class fileService {
    private async readFile() {
        return new Promise(async (resolve, reject) => {
            try {
                const file = xlsx.readFile(path.resolve(__dirname, '..', 'files', 'Férias.ods'), { cellDates: true })
                const fileData: VacationsRegisters[] = xlsx.utils.sheet_to_json(file.Sheets[file.SheetNames[0]])
                resolve(fileData)
            } catch (error) {
                reject(error)
            }
        })
    }
}

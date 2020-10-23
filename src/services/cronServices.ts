import {CronJob} from "cron";
import {saveVacations} from "@src/client/vacationClient";

export class CronServices {
    public async registerJobs () {
        const filesJob = await this.importFilesAndSaveVacations()
        filesJob.start()
        console.log("Serviço de importação do arquivo agendado")
    }
    private async importFilesAndSaveVacations () {
        const importFiles = new CronJob("* * 22 * * 0-4", async () => await saveVacations())
        return importFiles
    }
}

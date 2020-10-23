import {Vacation} from "@src/models/vacationModel";
import * as nodemailer from "nodemailer";
import config, {IConfig} from "config";

const mailConfig: IConfig = config.get('App.database');

interface GetVacationsParams {
    [key: string]: Date
}


export const transporter = nodemailer.createTransport({
    host: "smtp.tranorte.com.br",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: mailConfig.get("user"), // generated ethereal user
        pass: mailConfig.get("password"), // generated ethereal password
    },
})

export class NotificationService {
    async getEmployeesReturningOrGoingInVacations(vacationsParams: GetVacationsParams) {
        try {
            const employeesReturningOrGoingInVacations = await Vacation.find(vacationsParams)
            if (!employeesReturningOrGoingInVacations) return []
            return employeesReturningOrGoingInVacations
        } catch (error) {
            throw new Error("Falha ao consultar funcionários retornando ou saindo de férias de férias")
        }
    }

}

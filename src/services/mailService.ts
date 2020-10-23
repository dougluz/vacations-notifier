import * as nodemailer from 'nodemailer'
import config, {IConfig} from "config";
import * as Mail from "nodemailer/lib/mailer";

const mailConfig: IConfig = config.get('App.database');

export default class MailService {
    transporter: Mail

    constructor(transporter: Mail) {
        this.transporter = transporter
    }

    createEmail(mailHtml: string) {
        const mailOptions: Mail.Options = {
            from: "<ferias@tranorte.com.br>",
            to: "ti@tranorte.com.br",
            subject: "Funcionários saindo ou retornando de férias",
            html: mailHtml
        }
        return mailOptions
    }

    async sendEmail(transporter: Mail, mailOptions: Mail.Options) {
        try {
            await this.transporter.sendMail(mailOptions)
            return true
        } catch (error) {
            throw new Error(error.message)
        }
    }
}




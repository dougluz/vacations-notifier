import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'smtp.tranorte.com.br',
  port: '587',
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD
  },
  tls: {
    rejectUnauthorized: false
  }
})

export default transporter
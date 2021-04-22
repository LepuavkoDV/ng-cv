import nodemailer from 'nodemailer'

class Sendmail {
  async send (req, res) {
    try {
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_USER_PASSWORD
        }
      })

      const message = req.body
      const subj = 'Сообщение от ' + message.who
      const body = message.body + '<br/><br/><br/>' + 'Контакты: ' + message.contact
      const info = await transporter.sendMail({
        from: process.env.MY_EMAIL,
        to: process.env.GMAIL_EMAIL,
        subject: subj,
        text: body,
        html: body
      })

      res.status(200).send(info)
    } catch (error) {
      res.status(500).send(error)
    }
  }
}

export default Sendmail

import nodemailer from 'nodemailer'
import _ from 'lodash'

export default function (req, res) {
  const smtpConfig = {
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false, // use SSL
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  }

  const nodemailerMailgun = nodemailer.createTransport(smtpConfig)

  const recipients = process.env.MAIL_RECIPIENTS

  nodemailerMailgun.verify((err, success) => {
    err
      ? console.log(err)
      : console.log(`=== Server is ready to take messages: ${success} ===`)
  })
  const services = _.compact(req.body.serviceInfo)

  nodemailerMailgun.sendMail(
    {
      from: req.body.email,
      to: recipients.split(', '), // An array if you have multiple recipients.
      subject:
        'Contact Us Inquiry on crokeand.co from ' +
        req.body.firstname +
        ' ' +
        req.body.lastname,
      //You can use "html:" to send HTML email content. It's magic!
      //html: '<b>Wow Big powerful letters</b>',
      //You can use "text:" to send plain-text content. It's oldschool!
      text:
        'Message: ' +
        req.body.message +
        '\n\n' +
        'Phone: ' +
        req.body.phone +
        '\n\n' +
        'Interested in: ' +
        services,
    },
    (err, info) => {
      if (err) {
        console.log(`Error: ${err}`)
      } else {
        console.log(`Response: ${info}`)
      }
    }
  )

  res.status(200)
  res.send()
}

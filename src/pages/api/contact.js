'use strict'

let nodemailer = require('nodemailer')
let lodash = require('lodash')

let aws = require('@aws-sdk/client-ses')

export default function (req, res) {
  const AWS_ACCESS_KEY_ID = process.env.CB_AWS_ACCESS_KEY
  const AWS_SECRET_ACCESS_KEY = process.env.CB_AWS_SECRET_ACCESS_KEY
  const FROM_ADDRESS = 'no-reply@crokeandco.com'
  const TO_ADDRESS = process.env.MAIL_RECIPIENTS
  const services = lodash.compact(req.body.serviceInfo)

  const ses = new aws.SES({
    apiVersion: '2010-12-01',
    region: 'us-east-1',
    credentials: {
      secretAccessKey: AWS_SECRET_ACCESS_KEY,
      accessKeyId: AWS_ACCESS_KEY_ID,
    },
  })

  // create Nodemailer SES transporter
  let transporter = nodemailer.createTransport({
    SES: { ses, aws },
    host: 'email-smtp.us-east-1.amazonaws.com',
    port: 587,
    secure: true,
  })

  // send some mail
  transporter.sendMail(
    {
      from: FROM_ADDRESS,
      to: TO_ADDRESS,
      subject: 'Contact Us Inquiry on crokeand.co from ' + req.body.name,
      text:
        'Message: ' +
        req.body.message +
        '\n\n' +
        'Phone: ' +
        req.body.phone +
        '\n\n' +
        'Interested in: ' +
        services,
      ses: {},
    },
    (err, info) => {
      //console.log(err || info)
    }
  )
  res.status(200)
  res.send()
}

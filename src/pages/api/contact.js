'use strict'

let nodemailer = require('nodemailer')
let lodash = require('lodash')

let aws = require('@aws-sdk/client-ses')

export default async function (req, res) {
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
  })

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error)
        reject(error)
      } else {
        console.log('Server is ready to take our messages')
        resolve(success)
      }
    })
  })

  const mailData = {
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
  }

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.error(err)
        reject(err)
      } else {
        console.log(info)
        resolve(info)
      }
    })
  })

  res.status(200)
  res.send()
}

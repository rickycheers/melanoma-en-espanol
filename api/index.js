require('dotenv').config()
const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT

app.use(bodyParser.urlencoded({extended: false}))
app.use(cors({origin: process.env.WEBSITE_HOST}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json({
    mensaje: 'Hola Mundo'
  })
})

app.post('/contacto', (req, res) => {
  const joi = require('joi')
  const schema = joi.object({
    nombre: joi.string().min(2).required(),
    correo: joi.string().email().required(),
    mensaje: joi.string().min(10).required()
  }).messages({
    "string.min": "Campo inválido",
    "string.email": "Correo inválido",
    "any.required": "Este campo es requerido"
  })

  const {error} = schema.validate(req.body, {
    abortEarly: false
  })

  if (error) {
    res.status(400).json({
      mensaje: 'Error al validar campos',
      detalles: error.details
    })
    return
  }

  const mailgun = require("mailgun-js");
  const key = process.env.MAILGUN_API_KEY
  const domain = process.env.MAILGUN_DOMAIN
  const mg = mailgun({apiKey: key, domain: domain});
  const data = {
    from: `Melanoma en Español <no-responder@${domain}>`,
    to: process.env.EMAIL_CONTACTO,
    subject: `Mensaje de ${req.body.nombre}`,
    text: `
    El siguiente mensaje fue enviado desde el sitio web:
    De: ${req.body.nombre} <${req.body.correo}>
    Mensaje:
    ${req.body.mensaje}`
  };

  mg.messages().send(data, function (error, body) {
    if (error) {
      res.status(500).json({ error: error })
      return
    }

    res.json(body)
  });
})

app.listen(port, () => {
  console.log(`API corriendo en puerto ${port}`)
})

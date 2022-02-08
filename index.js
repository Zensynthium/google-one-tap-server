const express = require('express')
require('dotenv').config()
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

var corsOptions = {
  origin: process.env.CLIENT_URL,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  methods: "POST",
  credentials: true,
}

// enable pre-flight request for verify-token request
app.options('/verify-token', cors(corsOptions))

// This route is just for testing, remove or comment out in production
// app.get('/', cors(), (req, res) => {
//   res.send(`Server is up! \nClient Url: ${process.env.CLIENT_URL} \nClient ID: ${proccess.env.CLIENT_ID}`)
// })

app.post('/verify-token', cors(corsOptions), (req, res) => {
  const CLIENT_ID = process.env.CLIENT_ID

  const { OAuth2Client } = require('google-auth-library')
  const client = new OAuth2Client(CLIENT_ID)

  async function verify() {
  	const ticket = await client.verifyIdToken({
  		idToken: token,
  		audience: CLIENT_ID, // Specify the CLIENT_ID of the app that accesses the backend
  		// Or, if multiple clients access the backend:
  		//[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
  	})

  	const payload = ticket.getPayload()
  	const userid = payload['sub']
  	// If request specified a G Suite domain:
  	// const domain = payload['hd']
  }

  verify().catch(console.error)
})

app.listen(port, () => {
  console.log(`Google One-Tap Signin Server is listening on port ${port}`)
})


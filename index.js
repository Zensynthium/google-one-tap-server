const express = require('express')
require('dotenv').config()
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

// Opening ports for testing
// app.use(cors())

var corsOptions = {
  origin: process.env.CLIENT_URL,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// This route is just open for testing, it can be removed if desired
app.get('/', cors(), (req, res) => {
  res.send('Server is up!')
})

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
  console.log(`Example app listening on port ${port}`)
})


  # google-onetap-signin-server

  ## Project setup
  ```
  npm install
  ```

  ### Compiles and hot-reloads for development
  ```
  npm run dev
  ```
  
  # Main Configuration

  ### Enviornment Variables
  If you're new to environmental variables make sure you restart the server after updating them (the credentials are NOT refreshed on hot reload).
  
  Turn example.env into .env. Also it's likely that whatever platform the client is hosted on will likely need the .env variables manually added in on the host site as .env files don't (and shouldn't) get uploaded to Github.
  ### Google One-Tap Signin Client
  Here's a sample repo of a front end client utilizing Vue to send authentication requests to this server.
  https://github.com/Zensynthium/google-onetap-signin-client-vue

  ### CORS Issues
  You may run into CORS (Cross-Origin Resource Sharing) related issues while testing locally, so you may need to upload the client & server to test or troubleshoot. (Server can be hosted for free for testing on heroku).

  https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin

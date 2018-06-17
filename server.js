const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(__dirname + '/client/build/'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/build/index.html')
})

app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send('Hello world!')
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
})

// Unneccessary Mongoose set-up //require("dotenv").config(); const mongoose =
// require('mongoose'); mongoose.Promise = global.Promise;
// mongoose.connect(process.env.MONGODB_URI); const connection =
// mongoose.connection; connection.on('connected', () => { console.log('Mongoose
// Connected Successfully'); }); // If the connection throws an error
// connection.on('error', (err) => {   console.log('Mongoose default connection
// error: ' + err); });
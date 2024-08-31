require('dotenv').config();
const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const Config = require('./config');

const app = express();

app.get('/', (req, res) => {
  return res.send('Testing')
})

app.listen(Config.server.port || 3000, () => {
  console.log(`Server is listening on port ${Config.server.port}`);
})
// mongoose.connect(Config.database.connection_string).then(() => {
//   console.log('Successfully connected to database.');


//   // Catch 404 and forward to error handler
//   app.use((req, res, next) => {
//     const error = new Error('Endpoint not found.');
//     error.status = 404;
//     next(error);
//   });

//   // Error handler
//   app.use((error, req, res, next) =>
//     res.status(error.status || 500).json({
//       message: error.message,
//       error: Config.node_environment === 'development' ? error : {},
//       title: 'Error',
//     })
//   );

//   const server = http.createServer(app);

//   server.listen(Config.server.port || 3000, () => {
//     console.log(`Server is listening on port ${server.address().port}`);
//   });
// });
const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const host = process.env.HOST || 'localhost';
const app = express();

app.use(express.static(__dirname))

app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(port, host)
console.log('server started on ' + host + ':' + port);

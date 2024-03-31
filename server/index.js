const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Text in the app.get in server/index.js');
})

app.listen(8080, () => {
  console.log('server listening on port 8080');
})
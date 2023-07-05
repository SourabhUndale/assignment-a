
const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname,'public');


app.use(express.static(publicPath));
// Start the server
app.listen(5000, () => {
  console.log('Server started on port 5000');
});
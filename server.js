const express = require('express');
const app = express();
const PORT = 3001; // Hard-code the port number

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
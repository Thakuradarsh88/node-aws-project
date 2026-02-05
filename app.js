const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Node.js Ubuntu EC2 pe chal raha hai  samajh me aa gya adarsh babud🚀');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

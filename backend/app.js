const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors())
app.get('', (req, res) => {
  res.send("Hello AWS");
});


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on ${port}`));
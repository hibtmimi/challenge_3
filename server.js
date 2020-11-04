const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use('/', express.static(path.join(__dirname, 'public')));

app.post('/checkout', (req, res) => {
  console.log(req.body);
});

app.listen(port, () => console.log(`App listening on port ${port}!`))
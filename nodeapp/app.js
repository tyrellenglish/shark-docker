const express = require('express');
const path = require('path');
require('./db');

const sharkRoutes = require('./routes/sharks');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.use('/sharks', sharkRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

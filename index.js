const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const router = require('./routes');

const app = express();

/** Template Engine (Handlebars) */
app.engine(
  'handlebars',
  exphbs.engine({
    defaultLayout: 'layout',
  })
);

app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router());

app.listen(3000, () => {
  console.log('Servidor conectado');
});

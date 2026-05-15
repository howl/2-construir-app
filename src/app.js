const express = require('express');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', require('./routes/public'));
app.use('/api', require('./routes/public'));
app.use('/login', require('./routes/public'));
app.use('/auth', require('./routes/public'));

app.listen(port, () => {
  console.log('a la escucha del ', port)
});

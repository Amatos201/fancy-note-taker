const express = require('express');

const apiRoutes = require('./routes/apiRoutess');
const htmlRoutes = require('./routes/htmlRoutess');
const app = express();
const PORT= process.env.PORT || 3001;
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
















app.listen(PORT, () => {
    console.log(`API server now on port 3001!`);
  });
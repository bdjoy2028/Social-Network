const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/socialNetworkDB'); 

mongoose.set('debug', false);

app.use(require('./routes/userRoutes'));
app.use(require('./routes/thoughtRoutes'));

app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`));
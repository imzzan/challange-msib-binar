const express = require('express');
const cors = require('cors');
const routerCars = require('./src/routes/cars.js');

const app = express();
const PORT = 3004;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static('public'))

app.use('/cars', routerCars);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
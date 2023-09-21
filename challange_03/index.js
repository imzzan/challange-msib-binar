const express = require("express");
const carsRouter = require("./src/routes/cars.js");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Ping Successfully')
})

app.use("/cars", carsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

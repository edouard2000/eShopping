const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.options("*", cors());

// Middleware
app.use(express.json());
app.use(morgan("tiny"));

const API_URL = '/api/v1';
const CONNECTION_STRING = "mongodb://localhost:27017/onlineShopping_dataBase";

// Routes
const categoriesRoutes = require("./routes/categories");
const productsRoutes = require("./routes/products");
const usersRoutes = require("./routes/users");
const ordersRoutes = require("./routes/orders");

app.use(`${API_URL}/categories`, categoriesRoutes);
app.use(`${API_URL}/products`, productsRoutes);
app.use(`${API_URL}/users`, usersRoutes);
app.use(`${API_URL}/orders`, ordersRoutes);

mongoose.connect(CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Server
const port = 2000; // You can set your desired port here directly, or leave it as is.
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

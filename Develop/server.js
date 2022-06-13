const express = require('express');
const routes = require('./routes');
const {Category, Product, ProductTag, Tag} = require('./models')
const connection = require('./config/connection')
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
Category.sync()
Product.sync()
ProductTag.sync()
Tag.sync()

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

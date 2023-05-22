const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

const startServer = async () => {
  try {
    await sequelize.sync({ force: false });
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
};

startServer();

/*
I've used an async function startServer() to handle the server startup.
Inside this function, use await to ensure that sequelize.sync() completes 
before starting the server with app.listen().
If any errors occur during the process, they will be caught and logged to the console.
using an async function and await, we can handle asynchronous operations in a more readable and manageable way.
*/
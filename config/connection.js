require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.JAWSDB_URL || process.env.DB_NAME,
  process.env.JAWSDB_URL ? undefined : process.env.DB_USER,
  process.env.JAWSDB_URL ? undefined : process.env.DB_PASSWORD,
  {
    host: process.env.JAWSDB_URL ? undefined : '127.0.0.1',
    dialect: 'mysql',
    dialectOptions: {
      decimalNumbers: true,
    },
  }
);

module.exports = sequelize;

/*
The require('dotenv').config() line loads the environment variables from a .env file, 
allowing you to store sensitive information or configuration details securely.
The Sequelize constructor is used to create a new Sequelize instance. 
The connection parameters are passed based on the presence of the JAWSDB_URL environment variable. 
If JAWSDB_URL is defined, it uses that URL for the database connection. 
Otherwise, it falls back to using the DB_NAME, DB_USER, and DB_PASSWORD environment variables 
to establish a connection to a local MySQL database.
The module.exports statement exports the sequelize object, 
making it available for other parts of your application to import 
and use for defining models and performing database operations.
*/
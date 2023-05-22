const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;

/*
The const { Model, DataTypes } = require('sequelize') line imports the necessary modules 
from Sequelize, including the Model and DataTypes objects. These modules provide the tools
for defining Sequelize models and data types.
The const sequelize = require('../config/connection') line imports the sequelize instance 
from the connection module. This ensures that the Product model uses the same Sequelize instance 
as the rest of the application.
The class Product extends Model {} line defines a new class named Product that extends 
the Model class provided by Sequelize. This class represents the "Product" table in the database 
and will inherit various methods and functionalities from the Model class.
The Product.init() method initializes the model with the table's columns and their respective data types and options. 
It defines the following columns:

id: An auto-incrementing primary key of type INTEGER that cannot be null.
product_name: A string column representing the name of the product, which cannot be null.
price: A decimal column representing the price of the product, which cannot be null. 
It includes a validation rule isDecimal: true to ensure that the value is a valid decimal number.
stock: An integer column representing the stock quantity of the product, which cannot be null. 
It has a default value of 10 and includes a validation rule isNumeric: true to ensure that the value is a valid numeric value.
category_id: An integer column representing the category ID of the product. 
It includes a reference to the "id" column of the "category" table.
The second argument to Product.init() is an object that configures various options for the model, including:

sequelize: The sequelize instance to use for the model, which was imported from the connection module.
timestamps: false: Disables the automatic timestamp fields (createdAt and updatedAt) on the model.
freezeTableName: true: Ensures that the table name in the database matches the model name.
underscored: true: Configures the column names to use underscored naming convention (e.g., category_id instead of categoryId).
modelName: 'product': Sets the model name to 'product', which will be used when referencing the model elsewhere in the application.
Finally, the module.exports = Product line exports the Product model, making it available for other parts of the
*/
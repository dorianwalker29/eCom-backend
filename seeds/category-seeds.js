const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;

/*
Import the Category model from the ../models path.
Define an array categoryData that contains objects representing category data to be seeded into the database.
Declare the seedCategories function that uses the bulkCreate method of the Category model to insert the categoryData into the database.
Export the seedCategories function to make it accessible to other modules.
*/
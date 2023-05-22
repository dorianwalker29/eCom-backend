const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

// Establish associations
module.exports.associate = () => {
  const { Product, Category, Tag, ProductTag } = module.exports;

  // Products belongsTo Category
  Product.belongsTo(Category, {
    foreignKey: 'category_id',
  });

  // Categories have many Products
  Category.hasMany(Product, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE',
  });

  // Products belongToMany Tags (through ProductTag)
  Product.belongsToMany(Tag, {
    through: ProductTag,
    foreignKey: 'product_id',
  });

  // Tags belongToMany Products (through ProductTag)
  Tag.belongsToMany(Product, {
    through: ProductTag,
    foreignKey: 'tag_id',
  });
};

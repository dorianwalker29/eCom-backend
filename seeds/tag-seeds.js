const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'Summer',
  },
  {
    tag_name: 'Fashion',
  },
  {
    tag_name: 'Sports',
  },
  {
    tag_name: 'Music',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;

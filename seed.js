require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Libations', sortOrder: 10},
    {name: 'Papas', sortOrder: 20},
    {name: 'Burgers', sortOrder: 30},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    // Drinks 
    {name: 'Napoleon Shake', category: categories[0], price: 0.00 },
    {name: 'Chocolate', category: categories[0], price: 0.00},
    {name: 'Vanilla', category: categories[0], price: 0.00},
    {name: 'Strawberry', category: categories[0], price: 0.00},
    {name: 'Pop', category: categories[0], price: 0.00},
    {name: 'Light Pop', category: categories[0], price: 0.00},
    {name: 'The Doctor', category: categories[0], price: 0.00},
    {name: 'Beer Root', category: categories[0], price: 0.00},
    {name: 'Diet Pop', category: categories[0], price: 0.00},
    {name: "Texas' Drink", category: categories[0], price: 0.00},
    {name: 'Yellow Lemon', category: categories[0], price: 0.00},
    {name: 'Strawberry Lemonade', category: categories[0], price: 0.00},
    {name: 'Hot Chocolate', category: categories[0], price: 0.00},
    {name: 'Coffee', category: categories[0], price: 0.00}, 

    // Fries
    {name: 'Papas Fritas', category: categories[1], price: 0.00},
    {name: 'Fries with Chz', category: categories[1], price: 0.00},
    {name: 'Road Kill Fries', category: categories[1], price: 0.00}, 

    // Burgers
    {name: '2 meat 2 chz', category: categories[2], price: 0.00},
    {name: '1 meat 1 chz', category: categories[2], price: 0.00},
    {name: '1 meat', category: categories[2], price: 0.00},
    {name: '3 meat 3 chz', caategory: categories[2], price: 0.00},
    {name: '4 meat 4 chz', category: categories[2], price: 0.00},
    {name: '2 meat 1 chz', category: categories[2], price: 0.00},
    
  ]);

  console.log(items)

  process.exit();

})();
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
    {name: '3 meat 3 chz', category: categories[2], price: 0.00},
    {name: '4 meat 4 chz', category: categories[2], price: 0.00},
    {name: '2 meat 1 chz', category: categories[2], price: 0.00},

  ]);  

  // await Item.deleteMany({});
  // const items = await Item.create([
    // Locations 
    // {address: '1210 N. Atlantic Blvd.', city: 'Alhambra', state: 'CA', area: 'LA', region: 'SoCal', latitude:, longitude:,},
    // {address: '420 N. Santa Anita Ave.', city: 'Arcadia', state: 'CA', area: 'LA', region: 'SoCal', latitude:, longitude:,},
    // {address: '324 S. Azusa Ave.', city: 'Azusa', state: 'CA', area: 'LA', region: 'SoCal', latitude:, longitude:,},
    // {address: '13850 Francisquito Ave.', city: 'Baldwin Park', state: 'CA', area: 'LA', region: 'SoCal', latitude:, longitude:,},
    // {address: '761 N. First St.', city: 'Burbank', state: 'CA', area: 'LA', region: 'SoCal', latitude:, longitude:,},
    // {address: '1316 Ventura Blvd.', city: 'Camarillo', state: 'CA', area: 'LA', region: 'SoCal', latitude:, longitude:,},
    // {address: '6841 Topanga Canyon Blvd.', city: 'Canoga Park', state: 'CA', area: 'LA', region: 'SoCal', latitude:, longitude:,},
    // {address: '1371 Grand Ave.', city: 'Covina', state: 'CA', area: 'LA', region: 'SoCal', latitude:, longitude:,},
    // {address: '13425 Washington Blvd.', city: 'Culver City', state: 'CA', area: 'LA', region: 'SoCal', latitude:, longitude:,},
    // {address: '21133 Golden Springs Rd.', city: 'Diamond Bar', state: 'CA', area: 'LA', region: 'SoCal', latitude:, longitude:,},
    // {address: '8767 Firestone Blvd.', city: 'Downey', state: 'CA', area: 'LA', region: 'SoCal', latitude:, longitude:,},
    // {address: '310 N. Harvey Dr.', city: 'Glendale', state: 'CA', area: 'LA', region: 'SoCal', latitude:, longitude:,},
    // {address: '119 S. Brand Ave.', city: 'Glendale', state: 'CA', area: 'LA', region: 'SoCal', latitude:, longitude:,},
    // {address: '1261 S. Lone Hill Ave.', city: 'Glendora', state: 'CA', area: 'LA', region: 'SoCal', latitude:, longitude:,},
    // {address: '14620 Gale Ave.', city: 'Hacienda Heights', state: 'CA', area: 'LA', region: 'SoCal', latitude:, longitude:,},
    // {address: '7009 Sunset Blvd.', city: 'Hollywood', state: 'CA', area: 'LA', region: 'SoCal', latitude:, longitude:,},
    // {address: '6000 Pacific Blvd.', city: 'Huntington Park', state: 'CA', area: 'LA', region: 'SoCal', latitude:, longitude:,},
    // {address: '17849 E Colima Rd.', city: 'Industry', state: 'CA', area: 'LA', region: 'SoCal', latitude:, longitude:,},
    // {address: '21620 Valley Blvd.', city: 'Industry', state: 'CA', area: 'LA', region: 'SoCal', latitude:, longitude:,},
    // {address: '3411 W. Century Blvd.', city: 'Inglewood', state: 'CA', area: 'LA', region: 'SoCal', latitude:, longitude:,},
    // {address: '14341 Firestone Blvd.', city: 'La Mirada', state: 'CA', area: 'LA', region: 'SoCal', latitude:, longitude:,},
    // {address: '15259 E. Amar Rd.', city: 'La Puente', state: 'CA', area: 'LA', region: 'SoCal', latitude:, longitude:,},
    // {address: '2098 Foothill Blvd.', city: 'La Verne', state: 'CA', area: 'LA', region: 'SoCal', latitude:, longitude:,},
    // {address: '5820 Bellflower Blvd.', city: 'Lakewood', state: 'CA', area: 'LA', region: 'SoCal', latitude:, longitude:,},
    // {address: '2021 Avenue “I”', city: 'Lancaster', state: 'CA', area: 'LA', region: 'SoCal', latitude:, longitude:,},
    // {address: '6391 E. Pacific Coast Hwy.', city: 'Long Beach', state: 'CA', area: 'LA', region: 'SoCal', latitude:, longitude:,},
    // {address: '4600 Los Coyotes Diagonal', city: 'Long Beach', state: 'CA', area: 'LA', region: 'SoCal', latitude:, longitude:,},
    // {address: '7691 Carson St.', city: 'Long Beach', state: 'CA', area: 'LA', region: 'SoCal', latitude:, longitude:,},
    // {address: '9245 W. Venice Blvd.', city: 'Los Angeles', state: 'CA', area: 'LA', region: 'SoCal', latitude:, longitude:,},
    // {address: '856 New Los Angeles Ave.', city: 'Moorpark', state: 'CA', area: 'LA', region: 'SoCal', latitude:, longitude:,},
    // {address: '25220 N. The Old Rd', city: 'Newhall', state: 'CA', area: 'LA', region: 'SoCal', latitude:, longitude:,},
    // {address: '5864 Lankershim Blvd.', city: 'North Hollywood', state: 'CA', area: 'LA', region: 'SoCal', latitude:, longitude:,},
    // {address: '9858 Balboa Blvd.', city: 'Northridge', state: 'CA', area: 'LA', region: 'SoCal', latitude:, longitude:,},
    // {address: '8630 Tampa Ave.', city: 'Northridge', state: 'CA', area: 'LA', region: 'SoCal', latitude:, longitude:,},
    // {address: '14330 Pioneer Blvd.', city: 'Norwalk', state: 'CA', area: 'LA', region: 'SoCal', latitude:, longitude:,},
    // {address: '361 W. Esplanade Dr.', city: 'Oxnard', state: 'CA', area: 'LA', region: 'SoCal', latitude:, longitude:,},
    // {address: '142 E. Palmdale Blvd.', city: 'Palmdale', state: 'CA', area: 'LA', region: 'SoCal', latitude:, longitude:,},
    // {address: '13651 Roscoe Blvd.', city: 'Panorama City', state: 'CA', area: 'LA', region: 'SoCal', latitude:, longitude:,},
    // {address: '2114 E. Foothill Blvd.', city: 'Pasadena', state: 'CA', area: 'LA', region: 'SoCal', latitude:, longitude:,},
    // {address: '9070 Whittier Blvd.', city: 'Pico Rivera', state: 'CA', area: 'LA', region: 'SoCal', latitude:, longitude:,},
    // {address: '1851 Indian Hill Blvd.', city: 'Pomona', state: 'CA', area: 'LA', region: 'SoCal', latitude:, longitude:,},
    // {address: '19901 Rinaldi St.', city: 'Porter Ranch', state: 'CA', area: 'LA', region: 'SoCal', latitude:, longitude:,},
    // {address: '3601 Inglewood Ave.', city: 'Redondo Ranch', state: 'CA', area: 'LA', region: 'SoCal', latitude:, longitude:,},
    // {address: '4242 N. Rosemead Blvd.', city: 'Rosemead', state: 'CA', area: 'LA', region: 'SoCal', latitude:, longitude:,},
    // {address: '11455 Laurel Canyon Blvd.', city: 'San Fernando', state: 'CA', area: 'LA', region: 'SoCal', latitude:, longitude:,},
    // {address: '1090 N. Western Ave.', city: 'San Pedro', state: 'CA', area: 'LA', region: 'SoCal', latitude:, longitude:,},
    // {address: '26368 Sand Canyon Rd.', city: 'Santa Clarita', state: 'CA', area: 'LA', region: 'SoCal', latitude:, longitude:,},
    // {address: '26401 Bouquet Canyon Rd.', city: 'Santa Clarita', state: 'CA', area: 'LA', region: 'SoCal', latitude:, longitude:,},
    // {address: '10525 Carmenita Rd.', city: 'Santa Fe Springs', state: 'CA', area: 'LA', region: 'SoCal', latitude:, longitude:,},
    // {address: '4444 Van Nuys Blvd.', city: 'Sherman Oaks', state: 'CA', area: 'LA', region: 'SoCal', latitude:, longitude:,},
    // {address: '1799 E. Spring St.', city: 'Signal Hill', state: 'CA', area: 'LA', region: 'SoCal', latitude:, longitude:,},
    // {address: '2600 Steams St.', city: 'Simi Valley', state: 'CA', area: 'LA', region: 'SoCal', latitude:, longitude:,},
    // {address: '3640 Cahuenga Blvd.', city: 'Studio City', state: 'CA', area: 'LA', region: 'SoCal', latitude:, longitude:,},
    
  // ]);

  console.log(items)

  process.exit();

})();
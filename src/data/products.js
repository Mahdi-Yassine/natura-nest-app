import natural    from '../assets/Natural.jpg';
import almond     from '../assets/Almond.jpg';
import honey      from '../assets/Honey.jpg';
import maple      from '../assets/Maple_Syrup.jpg';
import almondNat  from '../assets/Nature_Almonds.jpg';
import granola    from '../assets/Homemade-Granola.jpg';
import cashew     from '../assets/Cashew.jpg';
import dried      from '../assets/dried.jpg';

const products = [
  {
    id: 1,
    name: 'Natural Peanut Butter',
    description: 'Creamy, 100% roasted peanuts, no additives.',
    price: '8.99',
    image: natural,
    category: 'butter',
  },
  {
    id: 2,
    name: 'Almond Butter',
    description: 'Smooth almond butter full of healthy fats.',
    price: '11.99',
    image: almond,
    category: 'butter',
  },
  {
    id: 3,
    name: 'Raw Honey',
    description: 'Pure honey straight from natural beehives.',
    price: '12.50',
    image: honey,
    category: 'sweet',
  },
  {
    id: 4,
    name: 'Pure Maple Syrup',
    description: 'Rich and natural maple syrup for healthy mornings.',
    price: '14.00',
    image: maple,
    category: 'sweet',
  },
  {
    id: 5,
    name: 'Organic Almonds',
    description: 'Crunchy almonds, high in protein and vitamins.',
    price: '10.00',
    image: almondNat,
    category: 'snack',
  },
  {
    id: 6,
    name: 'Homemade Granola',
    description: 'Crunchy oats mixed with nuts and dried fruits.',
    price: '7.50',
    image: granola,
    category: 'snack',
  },
  {
    id: 7,
    name: 'Cashew Butter',
    description: 'Smooth and creamy cashew butter, naturally sweet.',
    price: '13.50',
    image: cashew,
    category: 'butter',
  },
  {
    id: 8,
    name: 'Mixed Dried Fruits',
    description: 'A healthy mix of raisins, apricots, and dates.',
    price: '9.00',
    image: dried,
    category: 'snack',
  },
];

export default products;
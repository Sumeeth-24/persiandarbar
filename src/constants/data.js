import images from './images';

const wines = [
  {
    title: 'Chicken Kepsa Biryani',
    price: '$36',
    tags: 'LU | 1 kg',
  },
  {
    title: 'Chicken Kepsa Chilly Rice',
    price: '$59',
    tags: 'AW | 1 kg',
  },
  {
    title: 'King Prawns Biryani',
    price: '$74',
    tags: 'HY | 1 kg',
  },
  {
    title: 'Mutton Kepsa Biryani',
    price: '$81',
    tags: 'MU | 1 kg',
  },
  {
    title: 'Paneer Tikka Biryani',
    price: '$32',
    tags: 'KO | 1 kg',
  },
];

const cocktails = [
  {
    title: 'Mutton Chaap Tandoori',
    price: '$31',
    tags: 'Barbecued Mutton | Indian spices | 4 pcs',
  },
  {
    title: 'Chicken Tandoor Deluxe',
    price: '$26',
    tags: 'Barbecued Chicken | Indian spices | 6 pcs',
  },
  {
    title: 'Chicken Bara Deluxe',
    price: '$20',
    tags: 'Barbecued Chicken | Indian spices | 4 pcs',
  },
  {
    title: 'Pomfret Tandoori',
    price: '$25',
    tags: 'Barbecued Pomfret | Indian spices | 5 pcs',
  },
  {
    title: 'Chicken Leg Tandoori',
    price: '$16',
    tags: 'Barbecued Chicken | Indian spices | 4 pcs',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Best Multi-Cuisine restaurant of the Year',
    subtitle: 'Recognising the Restaurant which serves the best Multi-Cuisine in India.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'This category recognises the very best in a dining experience as evidenced by customer service and imagination in menu creation and ambience.',
  },
  {
    imgUrl: images.award05,
    title: 'Best Chef Led Restaurant of the Year',
    subtitle: 'A chef led Restaurant serving delectable dishes in Western India.',
  },
  {
    imgUrl: images.award03,
    title: 'Best Emerging International Cuisine',
    subtitle: 'Restaurant offering new and vibrant flavours in foreign cuisine.',
  },
];

export default { wines, cocktails, awards };

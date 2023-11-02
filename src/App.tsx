import {useState} from 'react';

import meatImage from './assets/meat.jpg';
import baconImage from './assets/bacon.png';
import cheeseImage from './assets/cheese.png';
import lettuceImage from './assets/lettuce.png';

import './App.css';

interface IngredientInfo {
  name: string;
  price: number;
  image: string;
}

const BASE_PRICE: number = 30;

const INGREDIENTS: IngredientInfo[] = [
  {name: 'Meat', price: 80, image: meatImage},
  {name: 'Cheese', price: 50, image: cheeseImage},
  {name: 'Lettuce', price: 10, image: lettuceImage},
  {name: 'Bacon', price: 60, image: baconImage},
];


const App = () => {
  const [ingredients, setIngedients] = useState(
      INGREDIENTS.map((ingredient) => ({ ...ingredient, count: 0 }))
  );


  return (
    <div>

    </div>

  );
};

export default App;

import {useState} from 'react';
import Burger from '../components/Burger/Burger';
import {INGREDIENTS, Ingredients} from '../Types/types';
import Menu from '../components/Menu/Menu';
import Total from '../components/Total/Total';


import meatImage from '../assets/meat.png';
import baconImage from '../assets/bacon.png';
import cheeseImage from '../assets/cheese.png';
import lettuceImage from '../assets/lettuce.png';

import './App.css';

const INGREDIENTS: INGREDIENTS[] = [
  {name: 'Meat', price: 80, image: meatImage},
  {name: 'Cheese', price: 50, image: cheeseImage},
  {name: 'Salad', price: 10, image: lettuceImage},
  {name: 'Bacon', price: 60, image: baconImage},
];

const App = () => {
  const [ingredients, setIngredients] = useState<Ingredients[]>([
    {name: 'Meat', count: 0},
    {name: 'Cheese', count: 0},
    {name: 'Salad', count: 0},
    {name: 'Bacon', count: 0},
  ]);

  const addIngredient = (index: number) => {
    setIngredients((prevState) => {
      return prevState.map((ingredient, i) => {
        if (index === i) {
          return {...ingredient, count: ingredient.count + 1};
        }
        return ingredient;
      });
    });
  };

  const getClasses = () => {
    return ingredients.reduce((acc: string[], item) => {
      if (item.count > 0) {
        for (let i = 0; i < item.count; i++) {
          acc.push(item.name);
        }
      }
      return acc;
    }, []);
  };
  const removeIngredient = (index: number) => {
    setIngredients((prevState) => {
      return prevState.map((ingredient, i) => {
        if (index === i && ingredient.count > 0) {
          return {...ingredient, count: ingredient.count - 1};
        }
        return ingredient;
      });
    });
  };

  const total = INGREDIENTS.reduce((total, ingredient) => {
    const ingredientsCount = ingredients.filter((i) => i.name === ingredient.name);
    const count = ingredientsCount.length > 0 ? ingredientsCount[0].count : 0;
    return total + (count * ingredient.price);
  }, 30);

  return (
    <div className="Application">
      <Menu
        INGREDIENTS={INGREDIENTS}
        ingredients={ingredients}
        onAdd={(index) => addIngredient(index)}
        onRemove={(index) => removeIngredient(index)}/>
      <div className="col">
        <Burger ingredientClasses={getClasses()}/>
        <Total count={total}/>
      </div>
    </div>
  );
};

export default App;

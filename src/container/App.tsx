import {useMemo, useState} from 'react';
import Button from '../components/Button/Button';
import {Ingredient} from '../types';

import meatImage from '../assets/meat.png';
import baconImage from '../assets/bacon.png';
import cheeseImage from '../assets/cheese.png';
import lettuceImage from '../assets/lettuce.png';

import './App.css';


const INGREDIENTS: Ingredient[] = [
  {name: 'Meat', price: 80, image: meatImage},
  {name: 'Cheese', price: 50, image: cheeseImage},
  {name: 'Lettuce', price: 10, image: lettuceImage},
  {name: 'Bacon', price: 60, image: baconImage},
];


const App = () => {
  const [ingredients, setIngredients] = useState(
    INGREDIENTS.map((ingredient) => {
      return {...ingredient, count: 0};
    })
  );

  const addIngredient = (index: number) => {
    setIngredients((prevState) => {
      return prevState.map((ingredient, i) => {
        if (index === i) {
          return { ...ingredient, count: ingredient.count + 1 };
        }
        return ingredient; // Возвращаем остальные ингредиенты без изменений
      });
    });
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

  const total = useMemo( () => {
    return ingredients.reduce((total, ingredient) => {
      return total + ingredient.count * ingredient.price;
    }, 30);
  }, [ingredients]);

  return (
    <>
      <div className="col">
        {ingredients.map((ingredient, index) => (
          <div className="list">
            <Button name={ingredient.name} image={ingredient.image} onItemClick={() => addIngredient(index)}/>
            <p>x{ingredient.count}</p>
            <button className="btn-remove" onClick={() => removeIngredient(index)}>Remove</button>
          </div>
        ))}
      </div>
      <div>
        <p>Total price: {total} KGS</p>
      </div>
    </>

  );
};

export default App;

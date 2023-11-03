import React from 'react';
import {INGREDIENTS, Ingredients} from '../../Types/types';
import Button from '../Button/Button';
import './Menu.css';

interface Props {
  INGREDIENTS: INGREDIENTS[];
  ingredients: Ingredients[];
  onAdd: (index: number) => void;
  onRemove: (index: number) => void;
}

const Menu: React.FC<Props> = ({INGREDIENTS, ingredients, onAdd, onRemove}) => {
  return (
    <div className="col">
      {INGREDIENTS.map((ingredient, index) => (
        <div key={index} className="list">
          <div>
            <Button
              name={ingredient.name}
              image={ingredient.image}
              onItemClick={() => onAdd(index)}
            />
          </div>
          <p className="count">×
            {ingredients.reduce((acc, item): number => {
              if (item.name === ingredient.name) {
                return acc + item.count;
              }
              return acc;
          }, 0)}
          </p>
          <button
            className="btn-remove"
            onClick={() => onRemove(index)}
          >
            Remove
          </button>
        </div>
      ))}

    </div>
  );
};

export default Menu;
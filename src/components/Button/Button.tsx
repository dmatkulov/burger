import React from 'react';
import './Button.css';

interface Props {
  name: string;
  image: string;
  onItemClick: React.MouseEventHandler;
}
const Button: React.FC<Props> = ({name, image, onItemClick}) => {
  return (
    <div>
      <button onClick={onItemClick} className="burger-btn">
        <img src={image} alt={name}/>
        <h5>{name}</h5>
      </button>
    </div>
  );
};

export default Button;
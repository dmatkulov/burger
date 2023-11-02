import React from 'react';

interface Props {
  name: string;
  image: string;
  onItemClick: React.MouseEventHandler;
}
const Button: React.FC<Props> = ({name, image, onItemClick}) => {
  return (
    <div>
      <button
        onClick={onItemClick}
        className="burger-btn">
        <img src={image} alt={name}/>
        {name}
      </button>
    </div>
  );
};

export default Button;
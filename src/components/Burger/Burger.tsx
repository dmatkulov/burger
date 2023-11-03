import React from 'react';
import './Burger.css';

interface Props {
    ingredientClasses: string[];
}
const Burger: React.FC<Props> = ({ ingredientClasses }) => {
    return (
        <div className="Burger">
            <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>
            {ingredientClasses.length > 0 ? (
                ingredientClasses.map((item, index) => (
                    <div
                        key={index}
                        className={item}
                    >
                    </div>
                ))
            ) : (
                <div>Add ingredient</div>
            )}
            <div className="BreadBottom"></div>
        </div>
    );
};

export default Burger;
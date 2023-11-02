import React from 'react';
import Button from "../Button/Button";
import {Ingredient} from "../../types";

interface Props {
    ingredient: Ingredient;
    onRemove: (index: number) => void;
    onAdd: (name: string) => void;
    count: number;
}

const MenuList: React.FC<Props> = ({ingredient, onRemove, count, onAdd}) => {
    return (
        <div>
            <Button name={ingredient.name} image={ingredient.image} onItemClick={() => onAdd}/>
            <div>
                {count}
                <button onClick={() => onRemove}/>
            </div>
        </div>
    );
};

export default MenuList;
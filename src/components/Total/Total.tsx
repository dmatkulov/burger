import React from 'react';

interface Props {
    count: number;
}

const Total: React.FC<Props> = ({count}) => {
    const totalStyle: React.CSSProperties = {
        fontSize: '24px',
        fontWeight: 'bold',
        color: 'gray'
    };

    return (
        <p style={totalStyle}>
            Total price {count} som
        </p>
    );
};

export default Total;
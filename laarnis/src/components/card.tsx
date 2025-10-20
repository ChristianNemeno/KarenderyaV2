import React from 'react';

type CardProps = {
    title: string;
    content: string;
};

const Card: React.FC<CardProps> = ({title, content}) => {
    return (
        <div className = "flex flex-col"> 
            <div className="p-4 bg-blue-300">{title}</div>
            <div className="p-4 bg-green-300">{content}</div>
        </div>
    )
}

export default Card;
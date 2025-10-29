import React from 'react';

type CardProps = {
    title: string;
    content: string;
    className?: string;
};

const Card: React.FC<CardProps> = ({ 
    title, 
    content, 
    className 
}) => {
    
    
    return (
        <div className = {`flex flex-col w-80 max-w-sm mx-auto rounded-lg overflow-hidden ${className}`}> 
            
            <div className="p-4 bg-blue-300">{title}</div>
            
            <div className="p-4 bg-green-300">{content}</div>
            
        </div>

        
    )
}

export default Card;
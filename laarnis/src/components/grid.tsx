import React from 'react';



type GridProps = {
    children: React.ReactNode;
    cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
    gap?: 'sm' | 'md' | 'lg';
    className?: string;
}

const Grid: React.FC<GridProps> = ({
    children,
    cols = 3,
    gap = 'md',
    className = ''
}) => {
    const colsClasses = {
        1: 'grid-cols-1',
        2: 'grid-cols-2',
        3: 'grid-cols-3',
        4: 'grid-cols-4',
        5: 'grid-cols-5',
        6: 'grid-cols-6',
        12: 'grid-cols-12',
    };

    const gapClasses = {
        sm: 'gap-2',
        md: 'gap-4',
        lg: 'gap-6',
    };

    return (
        <div className={`grid ${colsClasses[cols]} ${gapClasses[gap]} ${className}`}>
            {children}
        </div>
    );
};

export default Grid;


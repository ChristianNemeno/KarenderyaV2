import React from 'react';



type GridProps = {
    children: React.ReactNode;
    cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
    gap?: 'sm' | 'md' | 'lg';
    className?: string;
}

/**
 * Proper definition for this grid component.
 * Grid component for displaying a grid layout.
 * @param param0 - Props for the grid component.
 * @returns JSX.Element
 * 
 * notes to self:
 * i didnt use number type for cols because it would allow any number,
 * for simplicity i limited it to common grid column counts.
 * 
 * in case you forgot the code below basically means a grid when used as component, 
 * accepts the following props, and it follows the type props defined above.
 * 
 * @example
 * <Grid cols={4} gap='lg' className='custom-class'>
 *   <div>Item 1</div> 
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 *   <div>Item 4</div>
 * </Grid>
 */
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


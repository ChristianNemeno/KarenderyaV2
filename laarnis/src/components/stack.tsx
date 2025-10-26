import React from 'react';

interface stackProps {
    children : React.ReactNode
    spacing?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
    align?: 'start' | 'center' | 'end' | 'stretch';
    justify?: 'start' | 'center' | 'end' | 'between' | 'around';
    className?: string;
}


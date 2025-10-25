import React, { type ReactNode } from 'react';


interface SectionProps {
    children : React.ReactNode;
    className?: string;
    id?: string;
    fullHeight?: boolean;
    background?: 'light' | 'dark' | 'primary' | 'secondary' | 'custom'
}

export const Section: React.FC<SectionProps> = ({
    children,
    className = '',
    id,
    fullHeight = true,
    background = 'light'
}) => {
    const baseClasses = fullHeight
    ? 'min-h-screen w-full flex items-center justify-center'
    : 'w-full py-16';

    const backgroundClasses = {
        light: 'bg-white text-gray-900',
        dark: 'bg-gray-900 text-white',
        primary: 'bg-blue-600 text-white',
        secondary: 'bg-gray-100 text-gray-900',
        custom: ''
    };

    const combinedClasses = `${baseClasses} ${backgroundClasses[background]} ${className}`.trim();

    return (
        <section id={id} className={combinedClasses}>
            <div className="max-w-6xl mx-auto w-full px-4">
                {children}
            </div>
        </section>
    );
}


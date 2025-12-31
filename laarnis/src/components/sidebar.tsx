
import React from 'react';

type Width = "sm" | "md" | "lg"
type Position = "left" | "right"
type Variant = "permanent" | "temporary" | "responsive"


type SidebarProps = {
    children: React.ReactNode;
    width?: 'sm' | 'md' | 'lg' | 'full';
    position?: 'left' | 'right';
    variant?: 'permanent' | 'temporary' | 'responsive';
    bg?: string;
    textColor?: string;
    className?: string;
};

const Sidebar: React.FC<SidebarProps> = ({
    children,
    width = 'md',
    position = 'left',
    variant = 'permanent',
    bg = 'bg-gray-800',
    textColor = 'text-white',
    className = '',
}) => {


    const widthClasses = {
    sm: 'w-48',
    md: 'w-64',
    lg: 'w-80',
    full: 'w-full'
  };

  const positionClasses = {
    left: 'left-0',
    right: 'right-0'
  };

  const variantClasses = {
    permanent: 'block',
    temporary: 'hidden',
    responsive: 'hidden md:block'
  };

    return (
        <aside
        className={`
        fixed top-0 h-screen
        ${widthClasses[width]}
        ${positionClasses[position]}
        ${variantClasses[variant]}
        ${bg}
        ${textColor}
        shadow-lg
        overflow-y-auto
        ${className}
      `}
    >
      {children}
    </aside>
  );


type SectionProps = {
    children: React.ReactNode;
    className?: string;
};
   
}

export default Sidebar;
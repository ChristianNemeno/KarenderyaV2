import React from 'react';

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
  className = ''
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
};

// Sub-components
type SidebarHeaderProps = {
  children: React.ReactNode;
  className?: string;
};

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({ 
  children, 
  className = '' 
}) => (
  <div className={`p-6 border-b border-gray-700 ${className}`}>
    {children}
  </div>
);

type SidebarContentProps = {
  children: React.ReactNode;
  className?: string;
};

export const SidebarContent: React.FC<SidebarContentProps> = ({ 
  children, 
  className = '' 
}) => (
  <div className={`p-4 ${className}`}>
    {children}
  </div>
);

type SidebarFooterProps = {
  children: React.ReactNode;
  className?: string;
};

export const SidebarFooter: React.FC<SidebarFooterProps> = ({ 
  children, 
  className = '' 
}) => (
  <div className={`absolute bottom-0 w-full p-4 border-t border-gray-700 ${className}`}>
    {children}
  </div>
);

type SidebarItemProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  href?: string;
  className?: string;
};

export const SidebarItem: React.FC<SidebarItemProps> = ({
  children,
  icon,
  active = false,
  onClick,
  href,
  className = ''
}) => {
  const baseClasses = `
    flex items-center gap-3 px-4 py-3 rounded-md
    transition-colors cursor-pointer
    ${active ? 'bg-blue-600 text-white' : 'hover:bg-gray-700'}
    ${className}
  `;

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {icon && <span className="text-xl">{icon}</span>}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <div onClick={onClick} className={baseClasses}>
      {icon && <span className="text-xl">{icon}</span>}
      <span>{children}</span>
    </div>
  );
};

type SidebarGroupProps = {
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export const SidebarGroup: React.FC<SidebarGroupProps> = ({
  title,
  children,
  className = ''
}) => (
  <div className={`mb-4 ${className}`}>
    {title && (
      <h3 className="px-4 mb-2 text-xs font-semibold text-gray-400 uppercase">
        {title}
      </h3>
    )}
    <div className="space-y-1">{children}</div>
  </div>
);

export default Sidebar;
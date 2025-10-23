import React from 'react';

type NavbarProps = {
  logo?: string;
  links?: { name: string; href: string }[];
};

const Navbar: React.FC<NavbarProps> = ({ logo = "MyApp", links = [] }) => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Logo */}
        <div className="text-xl font-bold">
          <a href="/" className="hover:text-blue-200">
            {logo}
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="hover:text-blue-200 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
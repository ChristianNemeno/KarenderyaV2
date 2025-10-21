import React from 'react';


type NavbarProps = {
    logo?: string;
    links?: { name: string; href: string }[];
};


const Navbar: React.FC<NavbarProps> = ({ logo = "MyApp", links = []}) => {
    return (
        <nav>
            <div>
                <a href="#">{logo}</a>
            </div>
            
            <div>
                {links.map((link, index) => (
                    <a  key = {index}
                        href = {link.href}
                    >
                        {link.name}
                    </a>
                ))}
                
            </div>
        </nav>
    );
};

export default Navbar;


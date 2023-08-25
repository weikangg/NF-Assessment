import React from 'react';
import { User } from 'lucide-react'; // import the human icon
import { Menu } from 'lucide-react'; // import the hamburger icon

const Header: React.FC = () => {
  return (
    <header className="bg-white text-black p-4">
      <nav className="container mx-auto md:max-w-full flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            src="https://nodeflair.com/assets/logos/nodeflair_horizontal-ba1df3d92a0a4ba2f466b2e7ed34360c3259f808ad36b42165feaafa6611c344.svg"
            alt="NodeFlair Logo"
            className="h-12 w-auto md:h-16" // Adjust the size as needed
          />
        </div>
        <div className="flex space-x-4">
          {/* Sign-in button for large screens */}
          <button className="hidden md:flex items-center space-x-2">
            <User className="h-5 w-5" /> {/* Human logo */}
            <span className="text-black-400 font-bold">Sign In</span>
          </button>
          
          {/* Hamburger icon for small screens */}
          <button className="md:hidden flex items-center">
            <Menu className="h-5 w-5" /> {/* Hamburger icon */}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
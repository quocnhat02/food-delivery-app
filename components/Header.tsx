import Image from 'next/image';
import React from 'react';
import instagram from '../assets/instagram.png';
import arrowdown from '../assets/arrowdown.png';
import search from '../assets/search-icon.png';

const Header = () => {
  return (
    <div>
      <div className="flex">
        {/* Left */}
        <div className="flex">
          <div className="w-28">
            <Image src={instagram} />
          </div>
          <div className="h-3 w-3">
            <Image src={arrowdown} />
          </div>
        </div>
        {/* Middle */}
        <div className="flex">
          <div className="absolute flex items-center w-3 h-3">
            <Image src={search} alt="icon-search" />
          </div>
          <input type="text" placeholder="Search" />
        </div>
        {/* Right */}
      </div>
    </div>
  );
};

export default Header;

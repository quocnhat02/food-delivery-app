import Image from 'next/image';
import React from 'react';
import instagram from '../assets/instagram.png';
import arrowdown from '../assets/arrowdown.png';
import search from '../assets/search-icon.png';
import home from '../assets/home.png';
import message from '../assets/message.png';
import upload from '../assets/upload.png';
import discover from '../assets/discover.png';
import hearth from '../assets/hearth.png';
import profile from '../assets/profile.jpg';

const Header = () => {
  return (
    <div className="border-b shadow-sm">
      <div className="flex justify-between items-center h-16 px-2">
        {/* Left */}
        <div className="flex items-center">
          <div className="w-28">
            <Image src={instagram} alt="" />
          </div>
          <div className="h-3 w-3">
            <Image src={arrowdown} alt="" />
          </div>
        </div>
        {/* Middle */}
        <div className="hidden w-72 sm:flex relative items-center mx-2">
          <div className="absolute flex w-4 h-4 ml-2">
            <Image src={search} alt="icon-search" />
          </div>
          <input
            className="h-9 w-full rounded-md bg-[#efefef] pl-8 outline-0"
            type="text"
            placeholder="Search"
          />
        </div>
        {/* Right */}
        <div className="flex space-x-5">
          <div className="Btn hidden sm:flex">
            <Image src={home} alt="home" />
          </div>
          <div className="Btn hidden sm:flex">
            <Image src={message} alt="" />
          </div>
          <div className="Btn">
            <Image src={upload} alt="" />
          </div>
          <div className="Btn hidden sm:flex">
            <Image src={discover} alt="" />
          </div>
          <div className="Btn hidden sm:flex">
            <Image src={hearth} alt="" />
          </div>
          <div className="flex">
            <div className="Btn mr-5 ">
              <Image src={profile} className="rounded-full" alt="" />
            </div>
            <button className="cursor-pointer text-[#0095f6] font-semibold whitespace-nowrap">
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

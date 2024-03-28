"use client";
import { useState, useEffect, useRef, MouseEvent } from 'react';
import { FaBell, FaChevronDown, FaSearch, FaThumbsUp } from 'react-icons/fa';
import { CiMenuBurger, CiMenuKebab } from "react-icons/ci";
import Image from 'next/image';
import Link from 'next/link';
import DashSideBar from './DashSideBar';

const DashNav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const displayMenu= ()=>{
    setShowMenu(!showMenu);
  }
  const toggleDropdown = () => {
    setDropDown(!dropDown);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropDown(false);
    }
  };

  // useEffect(() => {
  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, []);

  return (
    <nav className="relative top-0  right-0 shadow-md dark:bg-dark/95 dark:text-white duration-300 sm:w-[100%] md:w-[100%] bg-WHITE w-full p-6">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex place-items-center gap-1 w-[50%] justify-between">
            <input type="text" placeholder="Search" className="border-2 rounded-2xl w-full" />
            <FaSearch />
          </div>
          <div className="flex gap-4 place-items-center">
            <div className="w-[30px]">
              <FaBell size={40} color="rgb(125,211,252)" />
            </div>
            <div>
              <Image src="/profile1.jpeg" alt="close" width={50} height={50} className="object-contain rounded-full bg-sky-100" />
            </div>
            <div className='block md:hidden' >
             
              <CiMenuBurger onClick={displayMenu}/>
            </div>
              <div className="absolute left-0 z-200 ">
            {

              showMenu&&(
                <DashSideBar/>
              )
            }
              </div>
          
            <div ref={dropdownRef}>
              {/* <div onClick={toggleDropdown} className="cursor-pointer">
                <FaChevronDown />
              </div> */}
              {dropDown && (
                <div className="absolute  z-100 top-12 right-0 mt-2 bg-white border border-gray-200 rounded shadow-md">
                  <ul>
                    <li className="px-4 py-2 hover:bg-gray-100">Profile</li>
                    <li className="px-4 py-2 hover:bg-gray-100">Settings</li>
                    <Link href="/">
                    <li className="px-4 py-2 hover:bg-gray-100">Log Out</li>
                    </Link>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashNav;

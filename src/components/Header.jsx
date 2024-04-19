import React from "react";
import { useState } from "react";

const Header = ({ propic }) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      {/* header */}{" "}
      <header className="bg-white py-4 px-6 flex justify-between items-center">
        <div className="flex gap-10">
          <div className="flex items-center">
            <a href="#" className="">
              <img
                src="/images/dribble.png"
                alt="dribble logo"
                className="h-8"
              />
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    showMenu
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
          <nav
            className={`md:flex flex-col md:flex-row md:space-x-6 max-md:absolute top-10 left-1/4 bg-white bg-opacity-70 px-3 ${
              showMenu ? "block" : "hidden"
            }`}
          >
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 block py-2 md:py-0"
            >
              Inspiration
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 block py-2 md:py-0"
            >
              Find Work
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 block py-2 md:py-0"
            >
              Learn Design
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 block py-2 md:py-0"
            >
              Go Pro
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 block py-2 md:py-0"
            >
              Hire Designers
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-1">
          <div className=" w-40">
            <input
              type="search"
              className="w-5/6 rounded-lg bg-gray-100 p-1.5 outline-none max-sm:hidden"
              placeholder="Search"
              spellCheck="false"
            />
          </div>
          <div className="w-10 h-10 rounded-full flex items-center justify-center text-white ">
            <img
              src={propic}
              alt="profile picture"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <button className="bg-pink-500 rounded-lg text-white text-sm p-2">
            Upload
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;

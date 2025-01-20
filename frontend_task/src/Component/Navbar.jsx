import React from "react";
import { FiGithub } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";

function Navbar({ isMenuOpen, setIsMenuOpen }) {
  return (
    <nav className="fixed top-0 left-0 bg-white shadow-md z-50 w-full">
      <div className="px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {isMenuOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
            </button>
            <h1 className="ml-4 text-xl font-bold text-gray-900">Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <FiGithub className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer" />
            <CiTwitter className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer" />
            <CiMail className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

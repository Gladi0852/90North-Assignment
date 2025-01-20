import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white w-full">
      <div className="px-4 py-6">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm">&copy; 2025 Pritam. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-300">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-300">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

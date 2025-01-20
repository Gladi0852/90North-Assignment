import React from "react";

export default function LeftSide({ isMenuOpen }) {
  return (
    <aside
      className={`${
        isMenuOpen ? "w-64" : "w-0"
      } bg-gray-800 text-white transition-all duration-1000 overflow-hidden pt-20`}
    >
      <div className="p-4">
        <ul className="space-y-2">
          <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">
            Dashboard
          </li>
          <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">
            Analytics
          </li>
          <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">
            Reports
          </li>
          <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">
            Settings
          </li>
        </ul>
      </div>
    </aside>
  );
}

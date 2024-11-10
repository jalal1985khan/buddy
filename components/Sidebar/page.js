"use client";
import { useState } from "react";
import Link from "next/link";
import { HiBars3 } from "react-icons/hi2";
import { DashboardMenu } from "@/utils/data";
import { FaRegEdit } from "react-icons/fa";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div>
      {/* Button to toggle the drawer */}
      <div className="text-center">
        <HiBars3 size={40} onClick={handleToggle} className="cursor-pointer" />
      </div>

      {/* Overlay to dim the background when the drawer is open */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50"
          onClick={handleToggle} // Close the drawer when the overlay is clicked
        ></div>
      )}

      {/* Drawer component */}
      <div
        id="drawer-navigation"
        className={`fixed left-0 top-0 z-40 h-screen w-64 bg-[#F6F6F6] p-4 transition-transform dark:bg-gray-800 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-labelledby="drawer-navigation-label"
      >
        <div class="flex flex-col items-center border-b border-gray-300 pb-4">
          <img
            class="mb-3 h-24 w-24 rounded-full shadow-lg"
            src="/images/profile.png"
            alt="Bonnie image"
          />
          <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Name
          </h5>
          <span class="flex items-center gap-2 text-sm text-[#49B7F2] dark:text-gray-400">
            update profile <FaRegEdit />
          </span>
        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={handleToggle}
          className="absolute end-2.5 top-2.5 inline-flex size-6 items-center justify-center rounded-full border border-[#49B7F2] bg-transparent text-sm text-[#49B7F2] hover:bg-[#49B7F2] hover:text-white dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="size-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <div className="overflow-y-auto py-4">
          {/* Menu Items */}
          <ul className="space-y-2 font-medium">
            {DashboardMenu.map((items, index) => (
              <li key={index} className="border-b border-gray-300 py-4">
                <Link href={items.menuUrl} className="flex items-center gap-4">
                  <img src={items.menuIcon} className="w-6" /> {items.menuName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

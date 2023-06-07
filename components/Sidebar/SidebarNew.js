import React, { useEffect, useRef, useState } from "react";

function SidebarNew({ isOpen, setIsOpen }) {
  const sidebarRef = useRef();
  const sidebarPRef = useRef();
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        sidebarRef.current &&
        sidebarPRef.current &&
        !sidebarRef.current.contains(event.target) &&
        sidebarPRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [sidebarRef]);

  return (
    <div
      ref={sidebarPRef}
      className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-50 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        ref={sidebarRef}
        className={`bg-white w-64 h-screen fixed left-0 top-0 ease-in-out transition-all duration-300 transform bg-gray-50 dark:bg-gray-800 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-0 right-0  mr-[-24px]  text-gray-50 hover:text-gray-200 focus:outline-none"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="x w-8 h-8">
            <path
              fillRule="evenodd"
              d="M13.414 12l3.293 3.293a1 1 0 11-1.414 1.414L12 13.414l-3.293 3.293a1 1 0 01-1.414-1.414L10.586 12 7.293 8.707a1 1 0 011.414-1.414L12 10.586l3.293-3.293a1 1 0 111.414 1.414L13.414 12z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div className="h-full px-3 py-4 overflow-y-auto sidebar">
          <div>Hello</div>
        </div>
      </div>
    </div>
  );
}

export default SidebarNew;

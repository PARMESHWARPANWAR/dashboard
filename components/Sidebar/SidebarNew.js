import React, { useEffect, useRef } from "react";
import DashboardCustomizeTwoToneIcon from "@mui/icons-material/DashboardCustomizeTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import ReceiptTwoToneIcon from "@mui/icons-material/ReceiptTwoTone";
import SettingsTwoToneIcon from "@mui/icons-material/SettingsTwoTone";
import EventRepeatTwoToneIcon from "@mui/icons-material/EventRepeatTwoTone";

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
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        ref={sidebarRef}
        className={`w-64 h-screen fixed left-0 top-0 ease-in-out transition-all duration-300 transform bg-black ${
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
          <div className="flex flex-col pt-[3.75rem] pr-[4.875rem] pb-[3.125rem] pl-[3.75rem] bg-black rounded-[1.875rem] w-full">
            <h1 className="sidebar-title">Board.</h1>
            <div className="sidebar-navigation md:items-start">
              <p className="sidebar-tab active-tab flex items-center space-x-2">
                <DashboardCustomizeTwoToneIcon className="h-5 w-5" />
                <span className="align-middle">Dashboard</span>
              </p>
              <p className="sidebar-tab flex space-x-2">
                <ReceiptTwoToneIcon className="h-5 w-5" />
                <span className="align-middle ">Transactions</span>
              </p>
              <p className="sidebar-tab flex items-center space-x-2">
                <EventRepeatTwoToneIcon className="h-5 w-5" />
                <span className="align-middle">Schedules</span>
              </p>
              <p className="sidebar-tab flex items-center space-x-2">
                <AccountCircleTwoToneIcon className="h-5 w-5" />
                <span className="align-middle">Users</span>
              </p>
              <p className="sidebar-tab flex items-center space-x-2">
                <SettingsTwoToneIcon className="h-5 w-5" />
                <span className="align-middle">Settings</span>
              </p>
            </div>
            <div className="mt-[2.5rem] flex flex-col gap-[1.25rem] md:mt-[20.75rem] items-center md:items-start">
              <p className="leading-relaxed font-montserrat font-normal text-xs text-white">
                Help
              </p>
              <p className="leading-relaxed font-montserrat font-normal text-xs text-white">
                Contact Us
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarNew;

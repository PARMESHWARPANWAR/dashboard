import DashboardCustomizeTwoToneIcon from "@mui/icons-material/DashboardCustomizeTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import ReceiptTwoToneIcon from "@mui/icons-material/ReceiptTwoTone";
import SettingsTwoToneIcon from "@mui/icons-material/SettingsTwoTone";
import EventRepeatTwoToneIcon from "@mui/icons-material/EventRepeatTwoTone";
function Sidebar() {
  return (
    <div className="flex flex-col p-[3.75rem 4.875rem 3.125rem 3.75rem] bg-black rounded-[1.875rem] overflow-hidden  lg:justify-between lg:flex-wrap lg:items-start lg:w-full  lg:p-20">
      <h1 className="sidebar-title">Board.</h1>
      <div className="sidebar-navigation items-center md:items-start">
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
  );
}

export default Sidebar;

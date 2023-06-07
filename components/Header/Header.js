import { useRouter } from "next/router";
import { useState } from "react";
import SidebarNew from "../Sidebar/SidebarNew";
import DehazeIcon from "@mui/icons-material/Dehaze";

function Header() {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }
  const logout = () => {
    router.push("/");
  };

  return (
    <div className="header-root">
      <div className="md:hidden">
        <DehazeIcon onClick={toggleSidebar} />
      </div>
      <div className="title hidden md:flex">Dashboard</div>
      <div className="navbar">
        <div className="searchbar">
          <input className="search" type="text" placeholder="Search..." />
          <img className="search-icon" src="./search.svg" alt="search" />
        </div>
        <img className="notification" src="./bell.svg" alt="svg" />
        <img
          className="avatar"
          src="./profilepic.png"
          alt=""
          onClick={logout}
        />
      </div>
      <div className="md:hidden">
        <SidebarNew isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      </div>
    </div>
  );
}

export default Header;

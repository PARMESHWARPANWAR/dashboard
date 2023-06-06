import { useRouter } from "next/router";

function Header() {
  const router = useRouter();

  const logout = () => {
    router.push("/");
  };

  return (
    <div className="header-root">
      <div className="title">Dashboard</div>
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
    </div>
  );
}

export default Header;

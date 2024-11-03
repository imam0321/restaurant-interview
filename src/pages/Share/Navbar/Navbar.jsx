import Menubar from "../../../assets/logo/menu 2.png";
import Logo from "../../../assets/logo/Logo.png";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>About</a>
      </li>
      <li>
        <a>Portfolio</a>
      </li>
      <li>
        <a>Clients</a>
      </li>
      <li>
        <a>Blog</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
    </>
  );

  return (
    <div className="navbar lg:py-4 lg:px-[200px]">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">
          <img src={Logo} alt="" />
        </a>
        <div className="hidden lg:flex justify-between items-center">
          <ul className="menu menu-horizontal text-white px-1">{navOptions}</ul>
        </div>
      </div>
      <div className="flex-none">
        <button className="btn btn-warning lg:px-[24px] lg:py-[10px] rounded-none hidden lg:inline">
          BOOK A TABLE
        </button>
        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <div className="w-10">
              <img src={Menubar} alt="" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navOptions}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

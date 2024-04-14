import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="navbar bg-base-100 text-neutral-content bg-neutral">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link className="" to="/plantcatalog">
                Plant Catalog
              </Link>
            </li>
            <li>
              <Link className="" to="/">
                My Plants
              </Link>
            </li>
            <li>
              <Link className="" to="/profile">
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link to="/" className="text-xl btn btn-ghost">
          KJMDPlants
        </Link>
      </div>
      <div className="pr-4 navbar-end">
        <a rel="noreferrer" href="http://klintonjmd.com/" target="_blank">
          My Portfolio
        </a>
      </div>
    </div>
  );
}

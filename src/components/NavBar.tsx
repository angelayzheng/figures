import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <header className="top-nav">
      <nav aria-label="Main navigation" className="top-nav-links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          end
        >
          Home
        </NavLink>

        <NavLink
          to="/draw"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Draw
        </NavLink>
      </nav>
    </header>
  );
}

export default NavBar;

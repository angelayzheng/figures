import { NavLink } from "react-router-dom";

function NavBar() {
  const navLinkBase =
    "inline-flex min-w-24 items-center justify-center rounded-full border border-transparent px-4 py-1 font-semibold text-text transition-all duration-150 hover:text-accent-hover";
  const navLinkActive =
    "bg-accent-soft border-border no-underline hover:no-underline text-accent-hover";

  return (
    <header className="border-border bg-bg sticky top-0 z-20 flex justify-center border-b px-6 py-4">
      <nav
        aria-label="Main navigation"
        className="flex items-center justify-center gap-3"
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${navLinkBase} ${navLinkActive}` : navLinkBase
          }
          end
        >
          Home
        </NavLink>

        <NavLink
          to="/draw"
          className={({ isActive }) =>
            isActive ? `${navLinkBase} ${navLinkActive}` : navLinkBase
          }
        >
          Draw
        </NavLink>
      </nav>
    </header>
  );
}

export default NavBar;

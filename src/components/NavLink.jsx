import { Link } from "react-router-dom";

export default function NavLink({
  children,
  href,
  component,
  setMenuOpen,
  setMenuContent,
}) {
  return (
    <div
      onMouseEnter={() => {
        setMenuOpen(true);
        setMenuContent(component);
      }}
      onMouseLeave={() => setMenuOpen(false)}
      className="group"
    >
      <Link to={href} className="relative">
        {children}
        <span className="absolute -bottom-2 -left-1 -right-1 h-0.5  bg-red-500 scale-x-0 duration-300 origin-left transition-transform group-hover:scale-x-100 ease-out"></span>
      </Link>
    </div>
  );
}

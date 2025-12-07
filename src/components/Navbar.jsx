import { NavLink } from "react-router-dom";
import ThemeToggleBtn from "./ThemeToggleBtn";

export default function Navbar( {onClick}) {
  return (
    <nav className="w-full h-[64px] sticky top-0 shadow-md border-b text-xl  bg-primary text-text">
      <ul className="h-full flex justify-end">
        <NavLink to="/" end className={({ isActive }) => "border-l p-6 px-8-link up" + (isActive ? " navlinkActive" : "")} >
          HOME
        </NavLink>
        <NavLink to="/about" end className={({ isActive }) => "border-l p-6 px-8-link up" + (isActive ? " navlinkActive" : "")} >
          ABOUT
        </NavLink>
        <NavLink to="/resume" className={({ isActive }) => "border-l p-6 px-8-link up" + (isActive ? " navlinkActive" : "")} >
          RESUME
        </NavLink>
        <NavLink to="/portfolio" className={({ isActive }) => "border-l p-6 px-8-link up" + (isActive ? " navlinkActive" : "")} >
          PORTFOLIO
        </NavLink>
        <NavLink to="/playground" className={({ isActive }) => "border-l p-6 px-8-link up" + (isActive ? " navlinkActive" : "")} >
          PLAYGROUND
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => "border-x p-6 px-8-link up" + (isActive ? " navlinkActive" : "")} >
          CONTACT
        </NavLink>
      <ThemeToggleBtn onClick={onClick} />
      </ul>
    </nav>
  );
}

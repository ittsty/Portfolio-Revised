import { NavLink } from "react-router-dom";
import ThemeToggleBtn from "./ThemeToggleBtn";

export default function Navbar( {onClick}) {
  return (
    <nav className="w-full h-20 flex sticky top-0 shadow-md border-b text-xl justify-center items-center pl-4 text-text bg-primary">
      <h1>Itt's DEV._</h1>
      <ul className="h-full hidden md:flex justify-end ml-auto">
        <NavLink to="/" end className={({ isActive }) => "border-l p-6 px-8 link up" + (isActive ? " navlinkActive" : "")} >
          HOME
        </NavLink>
        <NavLink to="/about" end className={({ isActive }) => "border-l p-6 px-8 link up" + (isActive ? " navlinkActive" : "")} >
          SKILL
        </NavLink>
        <NavLink to="/resume" className={({ isActive }) => "hidden border-l p-6 px-8 link up " + (isActive ? " navlinkActive" : "")} >
          RESUME
        </NavLink>
        <NavLink to="/portfolio" className={({ isActive }) => "border-l p-6 px-8 link up" + (isActive ? " navlinkActive" : "")} >
          WORK
        </NavLink>
        <NavLink to="/playground" className={({ isActive }) => "hidden border-l p-6 px-8 link up" + (isActive ? " navlinkActive" : "")} >
          PLAYGROUND
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => "border-x p-6 px-8 link up" + (isActive ? " navlinkActive" : "")} >
          CONTACT
        </NavLink>
      <ThemeToggleBtn onClick={onClick} />
      </ul>
    </nav>
  );
}

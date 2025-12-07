import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";
import ThemeToggleBtn from "./ThemeToggleBtn";

export default function Layout() {
  const [isDark, setDark] = useState(false);
  const toggleTheme = () => {
    console.log("click");
    setDark(!isDark);
  };
  return (
    <div className={isDark? "dark": ""}>
      <div className="min-h-dvh h-auto  bg-primary text-text">
        <Navbar onClick={toggleTheme} />
        <Outlet />
      </div>
    </div>
  );
}

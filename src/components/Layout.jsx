import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="min-h-dvh h-auto  bg-primary text-text">
      <Navbar />
      <Outlet />
    </div>
  );
}

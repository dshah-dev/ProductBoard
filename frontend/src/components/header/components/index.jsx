"use client";
import Link from "next/link";
import {
  FaHome,
  FaBars,
  FaTimes,
  FaShoppingCart,
  FaSignOutAlt,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { useHeader } from "../hooks/useHeader";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ children }) {
  const { toggleMenu, handleLogout, isOpen, setIsOpen, darkMode, setDarkMode } =
    useHeader();
  const pathname = usePathname();
  if (darkMode === null) return <div className="min-h-screen bg-background" />;
  return (
    <div className="min-h-screen bg-background flex flex-col sm:flex-row">
      <div className="sm:hidden bg-card border-b border-border-base p-4 flex justify-between items-center sticky z-50">
        <span className="font-black text-xl text-primary-brand ">
          ProductBoard
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 text-muted hover:text-primary-brand"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button
            onClick={toggleMenu}
            className="p-2 text-foreground hover:bg-muted/10 rounded-xl"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      <div
        className={`${isOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0 fixed sm:sticky top-0 left-0 z-40 w-60 h-screen bg-card border-r border-border-base transition-transform duration-300 ease-in-out`}
      >
        <div className="h-full flex flex-col p-6">
          <div className="mb-10 px-2 flex items-center justify-between gap-2">
            <span className="font-black text-2xl tracking-tight text-primary-brand">
              ProductBoard
            </span>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="hidden sm:flex p-2 rounded-xl bg-background border border-border-base text-muted hover:text-primary-brand transition-all active:rotate-12"
            >
              {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
          </div>

          <nav className="space-y-1 grow">
            <NavLink
              href="/dashboard"
              icon={<FaHome />}
              isActive={pathname === "/dashboard"}
              onClick={() => setIsOpen(false)}
            >
              Overview
            </NavLink>
            <NavLink
              href="/cart"
              icon={<FaShoppingCart />}
              isActive={pathname === "/cart"}
              onClick={() => setIsOpen(false)}
            >
              Cart
            </NavLink>
          </nav>

          <div className="pt-6 border-t border-border-base">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 p-3 text-muted font-medium hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all"
            >
              <FaSignOutAlt /> Logout
            </button>
          </div>
        </div>
      </div>

      <main className="flex-1 p-4 sm:p-8 md:p-12 max-w-400 mx-auto w-full overflow-x-hidden">
        {children}
      </main>
    </div>
  );
}

function NavLink({ href, icon, children, onClick, isActive }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-muted font-medium transition-all 
      ${isActive ? "bg-primary-brand/10 text-primary-brand group" : "group"}
      hover: hover: `}
    >
      <span
        className={`transition-transform ${
          isActive ? "scale-110" : "group-hover:scale-110"
        }`}
      >
        {icon}
      </span>

      {children}
    </Link>
  );
}

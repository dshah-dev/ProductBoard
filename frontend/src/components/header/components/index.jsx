"use client";

import React from "react";
import Link from "next/link";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";
import { CiBoxList } from "react-icons/ci";
import { useHeader } from "../hooks/useHeader";

export default function DashboardLayout({ children }) {
  const {toggleMenu,handleLogout,isOpen} = useHeader();

  return (
    <div className="min-h-screen sm:flex bg-slate-50">
      <div className="sm:hidden bg-slate-800 text-white p-4 flex justify-between items-center">
        <span className="font-bold">ProductBoard</span>
        <button onClick={toggleMenu} className="p-2 bg-slate-700 rounded">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div
        className={`${isOpen ? "block" : "hidden"} sm:block w-full sm:w-48 md:w-60 bg-slate-800 text-white`}
      >
        <div className="hidden sm:block p-6 text-xl font-bold border-b border-slate-700">
          ProductBoard
        </div>
        <nav className="p-3 ">
          <NavLink
            href="/dashboard"
            icon={<FaHome />}
            onClick={() => setIsOpen(false)}
          >
            Overview
          </NavLink>
          <NavLink
            href="/dashboard/products"
            icon={<CiBoxList />}
            onClick={() => setIsOpen(false)}
          >
            Products
          </NavLink>
          <NavLink
            href="/login"
            onClick={handleLogout}
            className="flex items-center p-3 text-red-400 hover:bg-slate-700 rounded-lg "
          >
            Logout
          </NavLink>
        </nav>
      </div>

      <main className="flex-1 p-6 sm:p-10">{children}</main>
    </div>
  );
}

function NavLink({ href, icon = "", children, onClick, className = "" }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`flex items-center gap-2 p-3 rounded-lg transition hover:bg-slate-700 ${className}`}
    >
      {icon} {children}
    </Link>
  );
}

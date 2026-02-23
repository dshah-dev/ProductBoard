"use Client";

import { deleteSession } from "@/utils/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const useHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const router = useRouter();
  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = async () => {
    await deleteSession();
    router.push("/login");
    toast.success("Logged out successfully");
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark" 
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return {
    toggleMenu,
    handleLogout,
    isOpen,
    setIsOpen,
    setDarkMode,
    darkMode
  };
};

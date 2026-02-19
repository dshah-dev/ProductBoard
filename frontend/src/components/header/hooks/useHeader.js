import { deleteSession } from "@/utils/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export const useHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = async () => {
    await deleteSession();
    router.refresh();
    router.push("/login");
    toast.success("Logged out successfully");
  };
  return {
    toggleMenu,
    handleLogout,
    isOpen,
    setIsOpen,
  };
};

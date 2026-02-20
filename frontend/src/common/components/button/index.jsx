"use client";
import React from "react";

function Button({ children, onClick, type = "button", className = "" }) {
  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={`btn-base bg-gray-200 text-gray-800 hover:bg-gray-300 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
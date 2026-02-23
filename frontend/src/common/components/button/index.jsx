"use client";
import React from "react";

function Button({ children, onClick, type = "button", className = "" }) {
  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={`btn-base bg-slate-100 text-slate-900 hover:bg-slate-200 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
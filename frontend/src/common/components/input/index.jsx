"use client";
import React from "react";

function Input({ label, error, className = "", ...props }) {
  return (
    <div className="w-full">
      {label && <label className="label-style">{label}</label>}
      <input
        {...props}
        className={`input-field ${error ? "border-red-500 focus:ring-red-500/10" : ""} ${className}`}
      />
      {error && (
        <p className="text-red-500 text-[10px] mt-1.5 font-bold uppercase ml-1">
          {error}
        </p>
      )}
    </div>
  );
}

export default Input;

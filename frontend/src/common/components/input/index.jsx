"use client";
import React from "react";

function Input({ label, error, className = "", ...props }) {
  return (
    <div className="w-full">
      {label && (
        <label className="label-style">
          {label}
        </label>
      )}
      
      <input 
        {...props} 
        className={`input-field ${error ? "input-field-error" : ""} ${className}`} 
      />
      
      {error && (
        <p className="text-red-500 text-xs mt-1 font-medium">
          {error}
        </p>
      )}
    </div>
  );
}

export default Input;
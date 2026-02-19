"use client";
import React from "react";

function Select({ label, options, error, className = "", ...props }) {
  return (
    <div className="w-full text-left">
      {label && (
        <label className="label-style">
          {label}
        </label>
      )}
      
      <select
        className={`input-field cursor-pointer appearance-none bg-no-repeat bg-right ${error ? "input-field-error" : ""} ${className}`}
        {...props}
      >
        <option value="">Select {label || "an option"}</option>
        {options?.map((opt, index) => {
          const value = typeof opt === "string" ? opt : opt.value;
          const labelText = typeof opt === "string" ? opt : opt.label;
          
          return (
            <option key={index} value={value}>
              {labelText}
            </option>
          );
        })}
      </select>

      {error && (
        <p className="text-red-500 text-xs mt-1 font-medium">
          {error}
        </p>
      )}
    </div>
  );
}

export default Select;
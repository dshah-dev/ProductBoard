"use client";
import React from "react";

const Skeleton = ({ className = "", variant = "normal", width, height }) => {
  const baseClass = "bg-slate-200 animate-pulse rounded-md shadow-inner";

  const variants = {
    normal: "",
    circle: "rounded-full",
    text: "h-3 w-full my-2",
  };

  const style = {
    width: width || (variant === "text" ? "100%" : "auto"),
    height: height || (variant === "text" ? "auto" : "auto"),
  };

  return (
    <div
      className={`${baseClass} ${variants[variant]} ${className}`}
      style={style}
    />
  );
};

export default Skeleton;
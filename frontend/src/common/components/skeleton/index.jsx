"use client";
import React from "react";

const Skeleton = ({ className = "", variant = "normal", width, height }) => {
  const baseClass = "bg-muted/10 animate-pulse rounded-2xl";

  const variants = {
    normal: "",
    circle: "rounded-full",
    text: "h-3 w-full my-2 rounded-lg",
  };

  const style = {
    width: width || (variant === "text" ? "100%" : "auto"),
    height: height || (variant === "text" ? "12px" : "auto"),
  };

  return (
    <div
      className={`${baseClass} ${variants[variant]} ${className}`}
      style={style}
    />
  );
};

export default Skeleton;
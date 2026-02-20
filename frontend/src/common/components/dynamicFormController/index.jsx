"use client";
import React from "react";
import Input from "../input/index";
import { Controller } from "react-hook-form";

const DynamicFormController = ({ control, config, errors }) => {
  return (
    <>
      {config.map((item) => {
        const { name, label, type, rules, placeholder, containerClass, inputClass } = item;

        return (
          <Controller
            key={name}
            name={name}
            control={control}
            rules={rules}
            render={({ field: { onChange, onBlur, value, name: fieldName, ref } }) => (
              <div className={`mb-5 text-left ${containerClass || ""}`}>
                <Input
                  name={fieldName}
                  ref={ref}
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value || ""} 
                  label={label}
                  type={type}
                  placeholder={placeholder}
                  className={inputClass} 
                  error={errors[name]?.message}
                />
              </div>
            )}
          />
        );
      })}
    </>
  );
};

export default DynamicFormController;
"use client";

import React from "react";
import { LOGIN_FIELDS } from "../constant/index";
import { useLogin } from "../hooks/useLogin";
import Button from "@/common/components/Button";
import DynamicFormController from "@/common/components/DynamicFormController";

export default function LoginPage() {
  const { control, errors, handleLogin } = useLogin();

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-xl">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-slate-800">Sign In</h1>
          <p className="text-slate-500 text-sm mt-1">
            Please sign in to your account
          </p>
        </div>

        <form onSubmit={handleLogin}>
          <DynamicFormController
            control={control}
            config={LOGIN_FIELDS}
            errors={errors}
          />

          <Button type="submit" className="btn-auth mt-2">
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
}

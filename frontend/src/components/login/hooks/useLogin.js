"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import users from "../../../../data/users.json";
import { createSession } from "@/utils/auth";

export const useLogin = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const foundUser = users.find(
      (u) => u.email === data.email && u.password === data.password,
    );

    if (foundUser) {
      await createSession(foundUser.name);

      toast.success(`Welcome back, ${foundUser.name}!`);

      router.push("/dashboard");
      router.refresh();
    } else {
      toast.error("Invalid email or password.");
    }
  };

  return {
    control,
    errors,
    handleLogin: handleSubmit(onSubmit),
  };
};

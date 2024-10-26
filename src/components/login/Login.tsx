"use client";
import React from "react";
import GlobalForm from "../globalComponents/GlobalForm";
import { TFormField } from "@/app/types/globalTypes";
import { z } from "zod";
/* eslint-disable @typescript-eslint/no-explicit-any */

const Login = () => {
  const formFields: TFormField[] = [
    {
      name: "username",
      label: "Username",
      placeholder: "shadcn",
      description: "This is your public display name.",
      type: "text",
      validation: z
        .string()
        .min(2, { message: "Username must be at least 2 characters." }),
    },
    {
      name: "email",
      label: "Email",
      placeholder: "example@domain.com",
      // description: "Enter your email address.",
      type: "email",
      validation: z
        .string()
        .email({ message: "Please enter a valid email address." }),
    },
    {
      name: "password",
      label: "Password",
      placeholder: "Enter your password",
      // description: "Choose a strong password.",
      type: "password",
      validation: z
        .string()
        .min(6, { message: "Password must be at least 6 characters." }),
    },
    {
      name: "confirm-password",
      label: "Confirm Password",
      placeholder: "Enter your password",
      // description: "Choose a strong password.",
      type: "password",
      validation: z
        .string()
        .min(6, { message: "Password must be at least 6 characters." }),
    },
  ];
  const submitLogic = async (vales: any) => {
    console.log(vales);
  };
  return (
    <>
      <GlobalForm formFields={formFields} submitLogic={submitLogic} />
    </>
  );
};

export default Login;

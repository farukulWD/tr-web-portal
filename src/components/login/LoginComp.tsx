"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import GlobalForm from "../globalComponents/GlobalForm";
import { TFormField } from "@/app/types/globalTypes";
import { z } from "zod";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { useLoginMutation } from "@/redux/api/auth/authApi";


const LoginComp = () => {

  const[login,{}]=useLoginMutation()
 
  const formFields: TFormField[] = [
    {
      name: "code",
      label: "Code",
      placeholder: "Enter your code",
      // description: "Enter your email address.",
      
      type: "number",
      validation: z.string().min(6, { message: "Code must be at least 6 characters." }).max(6, { message: "Code must be at most 6 characters." }),
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
  ];
  const submitLogic = async (vales: any) => {
    console.log(vales);
    try {
      const res = await login(vales).unwrap();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Card className="mx-auto max-w-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>
            Enter your email and password to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <GlobalForm formFields={formFields} submitLogic={submitLogic} />
        </CardContent>
      </Card>
    </>
  );
};

export default LoginComp;

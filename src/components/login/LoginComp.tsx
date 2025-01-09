"use client";

import React from "react";

import { z } from "zod";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { useLoginMutation } from "@/redux/api/auth/authApi";
import TrForm from "../Form/TrForm";
import { Button } from "../ui/button";
import TrInput from "../Form/inputs/TrInput";
import TrPasswordInput from "../Form/inputs/TrPasswordInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { globalErrorHandler } from "@/utils/globalErrorHandler";


const LoginComp = () => {

  const[login,{}]=useLoginMutation()
 
  


  const loginSchema=z.object({
   code:z.string().min(6, { message: "Code must be at least 6 characters." }).max(6, { message: "Code must be at most 6 characters." }),
   
   password:z.string()
   .min(6, { message: "Password must be at least 6 characters." }),
  })
  const submitLogic = async (vales: any) => {
    
    try {
      const res = await login(vales).unwrap();
      if (res) {
        console.log(res)
      }
    
    } catch (error) {
     globalErrorHandler(error)
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
        <TrForm onSubmit={submitLogic}   resolver={zodResolver(loginSchema)}>
          
          <TrInput name="code" placeholder="Type your Code " label="User Id" type="number"/>
          <TrPasswordInput name="password" placeholder="Type Your password" label="Password" />

          <Button type="submit">Login</Button>
        </TrForm>
        </CardContent>

        
      </Card>
    </>
  );
};

export default LoginComp;

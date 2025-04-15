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
import { TResponse } from "@/types";
import { toast } from "sonner";
import { useAppDispatch } from "@/redux/hook";
import { setToken } from "@/redux/features/auth/authSlice";
import { useRouter } from "next-nprogress-bar";
import { useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import { useCreatOrderMutation } from "@/redux/api/orderApi/orderApi";
import { jwtDecode } from "jwt-decode";

const loginSchema = z.object({
  code: z
    .string()
    .min(6, { message: "Code must be at least 6 characters." })
    .max(6, { message: "Code must be at most 6 characters." }),

  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
});
const LoginComp = () => {
  const dispatch = useAppDispatch();
  const [createOrder, { isLoading: creating }] = useCreatOrderMutation();
  const router = useRouter();
  const search = useSearchParams();

  const redirect = search.get("redirect");
  const [login, { isLoading }] = useLoginMutation();

  const submitLogic = async (vales: any) => {
    try {
      const res: TResponse<{
        accessToken: string;
      }> = await login(vales).unwrap();
      if (res.success) {
        const decodedToken: {
          exp: number;
          role: "admin" | "superAdmin" | "dealer" | "sr";
        } = jwtDecode(res?.data?.accessToken);
        if (decodedToken) {
          if (
            decodedToken?.role === "admin" ||
            decodedToken?.role === "superAdmin"
          ) {
            toast.error(
              "You are not allowed to login as admin or super admin from here"
            );
            return;
          }
          if (decodedToken?.role === "dealer") {
            dispatch(setToken(res?.data?.accessToken));
            localStorage.setItem("accessToken", res?.data?.accessToken);
            await createOrder({ orderType: "confirm" });
            router.push("/dashboard/dealer");
          }
          if (decodedToken?.role === "sr") {
            dispatch(setToken(res?.data?.accessToken));
            localStorage.setItem("accessToken", res?.data?.accessToken);
            router.push("/dashboard/sr");
          }
        }

        toast.success(res.message);
      }
    } catch (error) {
      globalErrorHandler(error);
    }
  };

  const defaultValue = {
    code: "250002",
    password: "01774605259",
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
          <TrForm
            onSubmit={submitLogic}
            defaultValues={defaultValue}
            resolver={zodResolver(loginSchema)}
          >
            <TrInput
              name="code"
              placeholder="Type your Code "
              label="User Id"
              type="number"
            />
            <TrPasswordInput
              name="password"
              placeholder="Type Your password"
              label="Password"
            />

            <Button disabled={isLoading} type="submit">
              {isLoading && <Loader2 className="animate-spin" />} Login
            </Button>
          </TrForm>
        </CardContent>
      </Card>
    </>
  );
};

export default LoginComp;

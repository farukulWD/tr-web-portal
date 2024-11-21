"use client";
import { z } from "zod"; // For schema validation
import { useForm } from "react-hook-form"; // Hook for form handling
import { zodResolver } from "@hookform/resolvers/zod"; // Integrate zod with react-hook-form
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"; // Import sadcn form components
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Define validation schema
const schema = z
  .object({
    currentPassword: z.string().min(1, "(Current password is required.) "),
    newPassword: z
      .string()
      .min(6, "(New password must be at least 6 characters.)"),
    confirmPassword: z.string().min(1, "(Confirm password is required.)"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "(Passwords do not match.)",
    path: ["confirmPassword"], // Path of the field where the error should appear
  });

export default function ChangePasswordComp() {
  // Initialize form with react-hook-form and zod schema
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  // Handle form submission
  const onSubmit = (values: any) => {
    console.log("Form Submitted:", values);
  };

  return (
    <Card className="w-full max-w-md">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardHeader>
            <CardTitle>Change Password</CardTitle>
            <CardDescription>
              Enter your current and new passwords to change your password.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Current Password Field */}
            <FormField
              name="currentPassword"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center gap-1">
                    <FormLabel className="font-semibold text-xs">
                      Current Password
                    </FormLabel>
                    <FormMessage className="text-xs" />
                  </div>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* New Password Field */}
            <FormField
              name="newPassword"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center gap-1">
                    <FormLabel className="font-semibold text-xs">
                      New Password
                    </FormLabel>
                    <FormMessage className="text-xs" />
                  </div>

                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Confirm New Password Field */}
            <FormField
              name="confirmPassword"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center gap-1">
                    <FormLabel className="font-semibold text-xs">
                      Confirm New Password
                    </FormLabel>
                    <FormMessage className="text-xs" />
                  </div>

                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Change Password
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}

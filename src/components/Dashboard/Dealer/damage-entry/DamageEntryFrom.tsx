"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const damageEntrySchema = z.object({
  type: z.string().min(1, { message: "Type is required" }), // Ensure type is not empty
  code: z.string().min(1, { message: "Code/Name is required" }),
  qty: z
    .union([
      z.number().min(1, { message: "Quantity must be at least 1" }),
      z.string().refine((val) => Number(val) >= 1, {
        message: "Quantity must be at least 1",
      }),
    ])
    .transform((val) => (typeof val === "string" ? Number(val) : val)), // Convert string to number
  note: z.string().min(1, { message: "Note is required" }),
  name: z.string().min(1, { message: "Name is required" }),
  price: z
    .union([
      z.number().min(0, { message: "Price must be a positive number" }),
      z.string().refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
        message: "Price must be a positive number",
      }),
    ])
    .transform((val) => (typeof val === "string" ? Number(val) : val)), // Convert string to number
  weight: z
    .union([
      z.number().min(1, { message: "Weight must be at least 1" }),
      z.string().refine((val) => Number(val) >= 1, {
        message: "Weight must be at least 1",
      }),
    ])
    .transform((val) => (typeof val === "string" ? Number(val) : val)), // Convert string to number
  category: z.string().min(1, { message: "Category is required" }),
});

type DamageEntryFormValues = z.infer<typeof damageEntrySchema>;

const DamageEntryForm = () => {
  const form = useForm<DamageEntryFormValues>({
    resolver: zodResolver(damageEntrySchema),
    defaultValues: {
      type: "",
      code: "",
      qty: 0,
      note: "",
      name: "",
      price: 0,
      weight: 0,
      category: "",
    },
  });

  const onSubmit = (data: DamageEntryFormValues) => {
    console.log("Form Data:", data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        {/* First Row */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end ">
          {/* Type Field */}
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>
                  Type<span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="type1">Type 1</SelectItem>
                      <SelectItem value="type2">Type 2</SelectItem>
                      <SelectItem value="type3">Type 3</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage className="min-h-5  ">
                  <span></span>
                </FormMessage>
              </FormItem>
            )}
          />
          {/* Code Field */}
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>
                  Code<span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Item Code" />
                </FormControl>
                <FormMessage className="min-h-5">
                  <span></span>
                </FormMessage>
              </FormItem>
            )}
          />
          {/* Qty Field */}
          <FormField
            control={form.control}
            name="qty"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>
                  Qty<span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input {...field} type="number" placeholder="Order Qty" />
                </FormControl>
                <FormMessage className="min-h-5  ">
                  <span></span>
                </FormMessage>
              </FormItem>
            )}
          />
          {/* Note Field */}
          <FormField
            control={form.control}
            name="note"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>
                  Note<span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Note Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="note1">Note Type 1</SelectItem>
                      <SelectItem value="note2">Note Type 2</SelectItem>
                      <SelectItem value="note3">Note Type 3</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage className="min-h-5  ">
                  <span></span>
                </FormMessage>
              </FormItem>
            )}
          />
        </div>
        {/* Second Row */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end mt-4">
          {/* Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>
                  Name<span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Name" />
                </FormControl>
                <FormMessage className="min-h-5  ">
                  <span></span>
                </FormMessage>
              </FormItem>
            )}
          />
          {/* Price Field */}
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>
                  Rate<span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Price" />
                </FormControl>
                <FormMessage className="min-h-5  ">
                  <span></span>
                </FormMessage>
              </FormItem>
            )}
          />
          {/* Weight Field */}
          <FormField
            control={form.control}
            name="weight"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>
                  Weight<span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input {...field} type="number" placeholder="Weight" />
                </FormControl>
                <FormMessage className="min-h-5  ">
                  <span></span>
                </FormMessage>
              </FormItem>
            )}
          />
          {/* Category Field */}
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>
                  Category<span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="category1">Category 1</SelectItem>
                      <SelectItem value="category2">Category 2</SelectItem>
                      <SelectItem value="category3">Category 3</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage className="min-h-5  ">
                  <span></span>
                </FormMessage>
              </FormItem>
            )}
          />
        </div>
        {/* Submit Button */}
        <Button type="submit" className="mb-5">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default DamageEntryForm;

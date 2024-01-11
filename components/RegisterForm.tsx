"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

export const formSchema = z.object({
  name: z.string().min(6, { message: "Username name is required" }),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .refine(
      (password) =>
        /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,}$/.test(password),
      {
        message: "Password must be alphanumeric with special characters",
      }
    ),
  confirmPassword: z
    .string()
    .min(8, "Password must be at least 8 characters long"),
});

export const RegisterForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const res = await axios({
        method: "post",
        url: "/api/auth/register",
        data: {
          name: values.name,
          email: values.email,
          password: values.password,
        },
      });
      form.reset();
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };
  return (
    <Form {...form}>
      <h1 className="font-semibold lg:text-2xl md:text-xl">
        Create an account
      </h1>
      <hr className="h-1 bg-yellow-400 border-0 rounded dark:bg-gray-700 my-2" />
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  placeholder="username"
                  {...field}
                  className="text-black"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="email"
                  {...field}
                  className="text-black"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="password"
                  {...field}
                  className="text-black"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="confirm password"
                  {...field}
                  className="text-black"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant="primary" className="w-full">
          Register
        </Button>
      </form>
    </Form>
  );
};

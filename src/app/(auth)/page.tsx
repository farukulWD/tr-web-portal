"use server";
import { getUser } from "../api/userApi";

import { redirect } from "next/navigation";

export default async function HomePage() {
  const user = await getUser();
  if (!user) {
    redirect("/login");
  }
  return (
    <div className="flex w-full justify-center items-center h-screen">
      Home page
    </div>
  );
}

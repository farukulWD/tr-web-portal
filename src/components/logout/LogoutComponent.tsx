"use client";

import { useLogoutMutation } from "@/redux/api/auth/authApi";
import { useRouter } from "next-nprogress-bar";

function LogoutComponent() {
  const router = useRouter();
  const [logout] = useLogoutMutation();
  const handleLogout = async () => {
    router.push("/");
    const res = await logout({}).unwrap();
  };
  return (
    <div onClick={() => handleLogout()} className="ml-auto text-red-400">
      <button>Logout</button>
    </div>
  );
}

export default LogoutComponent;

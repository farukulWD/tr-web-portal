"use client"

import { useLogoutMutation } from "@/redux/api/auth/authApi"

function LogoutComponent() {
    const [logout]=useLogoutMutation()
const handleLogout=async()=>{
const res = await logout({}).unwrap()
}
    return (
        <div onClick={()=>handleLogout()} className="ml-auto text-red-400">
            <button>Logout</button>
        </div>
    )
}

export default LogoutComponent
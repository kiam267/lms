import { useEffect } from "react";
import { useAuth } from "../context/auth";
import { Navigate } from "react-router-dom";

export default function Logout() {
   const {LogoutUser} = useAuth()

     useEffect(() => {
        LogoutUser();
    },[LogoutUser])

   return <Navigate  to="/login"/>;
}

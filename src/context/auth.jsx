import { createContext, useContext, useState,useMemo } from "react";
export const AuthContext = createContext();



// eslint-disable-next-line react/prop-types, no-unused-vars
export const AuthProvider = ({ children }) => {
   const [token, setToken] = useState(localStorage.getItem("Token"));
   let isLoggedIn = !!token;
   const storeToken = (serverToken) => {
      setToken(serverToken);
      return localStorage.setItem("Token", serverToken)
   };


   const LogoutUser = () => {
      setToken("")
      return localStorage.removeItem('Token');

   };

   const obj = useMemo(
     () => ({ isLoggedIn, storeToken, LogoutUser, token }),
     [isLoggedIn]
   );
   return <AuthContext.Provider value={obj}>
      {children }
   </AuthContext.Provider>
}




// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
   const authContextValue = useContext(AuthContext);
   if (!authContextValue) {
     throw new Error("useAuth used outside of the Provider") 
   }

   return authContextValue;
}
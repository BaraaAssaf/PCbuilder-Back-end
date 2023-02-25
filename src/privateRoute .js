import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import jwt_decode from 'jwt-decode'
import Error from "./pages/HomePages/erorrPage";
const PrivateRoute = ({children , path}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin , setIsAdmin] = useState(false);
  
  useEffect(() => {
   if(Cookies.get('token'))
   {
    setIsAuthenticated(true);
    var decoded = jwt_decode(Cookies.get('token'));
      if(decoded.token.role_id === 2)
        setIsAdmin(true);
   }
},[]);


   if(!isAuthenticated)  return <Error/>
   if(path.includes('/admin') && isAdmin) return children;
   else if(path.includes('/user')) return children;
   else return <Error/>;
}
export default PrivateRoute
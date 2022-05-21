import React from "react";
import { Routes ,Route, Navigate } from "react-router-dom";

import Login from "./login/Login";
import Signup from "./login/Signup";
import ForgotPassword from "./login/ForgotPassword";
import Dashboard from "./dashboard/Dashboard";

export default function MyRoutes () {
   
   function PrivateRoute(element) {
      return ( 
         localStorage.getItem('token')
            ? element
            : <Navigate to='/' />
      );
   }

   return(
      <Routes>
         <Route path="/" exact element={<Login/>}/>
         <Route path="/signup" exact element={<Signup/>}/>
         <Route path="/forgot-password" exact element={<ForgotPassword/>}/>
         <Route path="/dashboard" element={PrivateRoute(<Dashboard/>)}/>
         
      </Routes>
   )
}
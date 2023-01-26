import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router";


const PrivateRoute = ({ children, ...rest }) => {
  const user= useSelector(state => state.user)
  const {userInfo} = user
  useEffect(()=>{
     
     

  },[])
 
  return (
    <Route
      {...rest}
      render={({ location }) =>
      userInfo ? (
          children
        ) : (
          <Navigate
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;

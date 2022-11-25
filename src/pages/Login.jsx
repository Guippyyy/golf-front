import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (

    !isAuthenticated && (
      <>
      <div className="box">
      <h2 id="text">
        Welcome to Your personal Golf Buddie!
      </h2>
  <button className="btn btn-success" id="Start" onClick={() => loginWithRedirect()}>Start!</button></div></>));
};

export default LoginButton; 
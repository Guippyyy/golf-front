import { useAuth0 } from "@auth0/auth0-react";
import { useCallback } from "react";

function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = useCallback(async () => {
    loginWithRedirect();
  }, [loginWithRedirect]);

  return (
    <>
      <div className="box">
        <h2 id="text">Welcome to Your personal Golf Buddie!</h2>
        <button
          className="btn btn-success"
          id="Start"
          onClick={() => handleLogin()}
        >
          Start!
        </button>
      </div>
    </>
  );
}

export default LoginButton;

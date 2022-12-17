import { useAuth0 } from '@auth0/auth0-react';
import { useCallback } from 'react';

function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = useCallback(

    async () => {
      loginWithRedirect();
    },
    [loginWithRedirect],
  );

  return (
    <span
      type='button'
      id='login-logout'
      onClick={handleLogin}
    >
      Log In/Sign Up
    </span>
  );
}

export default LoginButton;

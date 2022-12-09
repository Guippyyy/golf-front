import { useAuth0 } from '@auth0/auth0-react';

function LogoutButton() {
  const { logout } = useAuth0();
  return (
    <span
      type="button"
      id="login-logout"

      onClick={() => logout({
        returnTo: window.location.origin,
      })}
    >
      Log Out
    </span>
  );
}

export default LogoutButton;

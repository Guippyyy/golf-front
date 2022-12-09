import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

export default function AuthenticationButton() {
  const {
    isAuthenticated,
  } = useAuth0(); // 👈 1

  if (isAuthenticated) { // 👈 2

    return (
      
        <div id="login-logout">
          <LogoutButton />
        </div>
    
    );
  }

  return <LoginButton />;
}

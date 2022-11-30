import { Auth0Provider } from '@auth0/auth0-react';

export default function MyAuth0Provider({ children }) {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const audience = process.env.REACT_APP_AUTH0_AUDIENCE;
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      audience={audience}
      redirectUri={`${window.location.origin}/profile`}
      cacheLocation="localstorage" // 👈 extra, niet in tutorial!
      useRefreshTokens
    >
      {children}
    </Auth0Provider>
  );
}
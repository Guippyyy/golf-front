import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router';
// import Loader from '../Loader';

export default function RequireAuth({ children }) {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) { 
    return <p>is loading</p>;
  }

  if (isAuthenticated) {
    return children;
  }

  return <Navigate to="/" />;
}

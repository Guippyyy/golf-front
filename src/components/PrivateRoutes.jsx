import { Route, Navigate, useLocation } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

export default function PrivateRoute({ children, ...rest }) {
    const { isAuthenticated } = useAuth0();
	const { pathname } = useLocation();
	
	return (
		<Route {...rest}>
			{
				isAuthenticated ? (
					children
				) : (
					<Route path={pathname}  element={<Navigate to="/" replace/>} />
				)
			}
		</Route>
	);
}
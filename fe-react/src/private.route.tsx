import { FC } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute: FC<{ path: string; element: FC }> = ({
  path,
  element: Element
}) => {
  const token = localStorage.getItem('token');

  if (path === '/restricted' && !token) {
    return <Navigate to="/login" />;
  }

  return token ? <Element /> : undefined;
};

export default PrivateRoute;

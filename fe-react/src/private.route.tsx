import { FC } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute: FC<{ path: string; element: FC }> = ({
  path,
  element: Element,
}) => {
  const token = localStorage.getItem("appToken")
  return token ? <Element /> : <Navigate to="/login" />;
};

export default PrivateRoute;
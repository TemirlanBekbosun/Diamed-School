import { Navigate } from "react-router";

const PrivateRoute = ({ roles, Component, fallbackPath }) => {
  const role = "USER";
  const allowedRoles = roles.includes(role);

  if (!allowedRoles) {
    return <Navigate to={fallbackPath} />;
  }

  return Component;
};

export default PrivateRoute;

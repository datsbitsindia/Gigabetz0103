import { Route, Redirect, RouteProps } from "react-router-dom";
import { Roles, useAuth } from "../context/auth-context";

type IProps = {
  allowedRoles: Roles[];
};
export const PrivateRoute = ({
  allowedRoles,
  ...props
}: IProps & RouteProps) => {
  const { isAllowedToRole, user } = useAuth();

  const isAllowed = isAllowedToRole ? isAllowedToRole(allowedRoles) : false;

  if (isAllowed) {
    return <Route {...props} />;
  } else {
    return <Redirect to="/" />;
  }
};

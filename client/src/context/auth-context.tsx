import React, { useCallback } from "react";
import { useLocalStorage } from "../hooks";

interface Role {
  id: string;
  name: Roles;
}
interface User {
  name?: string;
  token: string;
  role: Role;
  userName: string;
  userId: string;
}

export interface IAuthContext {
  logout: () => void;
  user: User;
  setUser: (user: User) => void;
  isAllowedToRole: (roles: Roles[]) => boolean;
}

export type Roles = "SuperAdmin" | "Admin" | "Users";

export const AuthContext = React.createContext<Partial<IAuthContext>>({});
AuthContext.displayName = "AuthContext";

function AuthProvider(props: any) {
  const [userData, setUserData] = useLocalStorage<User | null>(
    "loginuser",
    null
  );

  const isAllowedToRole = useCallback(
    (roles: Roles[]) => {
      console.log(roles);
      console.log(userData?.role.name);
      return roles.includes(userData?.role.name as Roles);
    },
    [userData]
  );

  const logout = useCallback(() => {
    setUserData(null);
  }, [setUserData]);

  return (
    <AuthContext.Provider
      value={{ logout, user: userData, setUser: setUserData, isAllowedToRole }}
      {...props}
    />
  );
}

function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
}

export { AuthProvider, useAuth };

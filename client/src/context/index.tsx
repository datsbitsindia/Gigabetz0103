import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./auth-context";

type ReactNode = {
  children: React.ReactNode;
};
//      // <AuthProvider>{children}</AuthProvider>
// function AppProviders({ children }): any {
//   return <BrowserRouter>{children}</BrowserRouter>;
// }
const AppProviders: React.FC<ReactNode> = (props) => (
  <BrowserRouter>
    <AuthProvider>{props.children}</AuthProvider>
  </BrowserRouter>
);

export { AppProviders };

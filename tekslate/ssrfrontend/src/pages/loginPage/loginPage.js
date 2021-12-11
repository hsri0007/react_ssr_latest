import React from "react";
import loadable from "react-loadable-visibility/loadable-components";
const LoginComponent = loadable(
  () => import("../../components/loginComponent/loginComponent"),
  {
    ssr: true,
  }
);

const LoginPage = () => {
  return (
    <div>
      <LoginComponent />
    </div>
  );
};

export default LoginPage;

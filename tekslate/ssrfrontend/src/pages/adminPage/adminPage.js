import React from "react";

import loadable from "react-loadable-visibility/loadable-components";
const AdminComponent = loadable(
  () => import("../../components/adminComponent/adminComponent"),
  {
    ssr: true,
  }
);

const AdminPage = () => {
  return (
    <div>
      <AdminComponent />
    </div>
  );
};

export default AdminPage;

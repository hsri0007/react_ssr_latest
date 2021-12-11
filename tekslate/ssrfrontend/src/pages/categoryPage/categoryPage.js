import React from "react";
import loadable from "react-loadable-visibility/loadable-components";
const Category = loadable(
  () => import("../../components/categoryComponent/category"),
  {
    ssr: true,
  }
);

const categoryPage = () => {
  return (
    <div>
      <Category/>
    </div>
  );
};

export default categoryPage;
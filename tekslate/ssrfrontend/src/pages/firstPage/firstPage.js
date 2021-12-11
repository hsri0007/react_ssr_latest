import React from "react";
import loadable from "react-loadable-visibility/loadable-components";
const FirstPageC = loadable(
  () => import("../../components/firstPage/firstPage"),
  {
    ssr: true,
  }
);

const FirstPage = () => {
  return (
    <div>
      <FirstPageC />
    </div>
  );
};

export default FirstPage;

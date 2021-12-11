import React from "react";
import loadable from "react-loadable-visibility/loadable-components";

const Payment = loadable(() => import("../../components/payment/main"), {
  ssr: true,
});

const DisplayStripe = loadable(
  () => import("../../components/payment/DisplayStripe"),
  {
    ssr: true,
  }
);

function payment() {
  return (
    <div>
      <Payment />
    </div>
  );
}

export default payment;

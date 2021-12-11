import React from "react";
import loadable from "react-loadable-visibility/loadable-components";
import { useSelector } from "react-redux";

const HomeComponent = loadable(
  () => import("../../components/homeComponent/homeComponent"),
  {
    ssr: true,
  }
);

const FirstPage = loadable(
  () => import("../../components/firstPage/firstPage"),
  {
    ssr: true,
  }
);



const Category = loadable(
  () => import("../../components/category/category"),
  {
    ssr: true,
  }
);

const CorporateClients = loadable(
  () => import("../../components/corporateClients/corporateClients"),
  {
    ssr: true,
  }
);

const Clients = loadable(
  () => import("../../components/clients/clients"),
  {
    ssr: true,
  }
);

// const SecondPage = loadable(
//   () => import("../../components/secondPage/secondPage"),
//   {
//     ssr: true,
//   }
// );

const Benifits = loadable(
  () => import("../../components/benifits/benifits"),
  {
    ssr: true,
  }
);

const BlogsHome = loadable(
  () => import("../../components/blogsHome/blogsHome"),
  {
    ssr: true,
  }
);

const Testimonials = loadable(
  () => import("../../components/testimonials/testimonials"),
  {
    ssr: true,
  }
);




const HomePage = () => {
  const { value } = useSelector((state) => state.home);
  return (
    <div>
      <HomeComponent />
      <CorporateClients />
      <FirstPage />
      <Category />
      <Clients />
      {/* <SecondPage /> */}
      <Testimonials />
      <Benifits />
      <BlogsHome />
    </div>
  );
};

export default HomePage;

import React from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import BlogDetails from "../components/blog-details";
import Footer from "../components/footer";

const NewsDetails = () => {
  return (
    <Layout pageTitle="News Details || NT Momineen">
      <HeaderOne />
      <StickyHeader />
      <PageHeader title="News Details" crumbTitle="News" />
      <BlogDetails />
      <Footer />
    </Layout>
  );
};

export default NewsDetails;

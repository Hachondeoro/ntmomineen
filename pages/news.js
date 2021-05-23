import React from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import BlogPage from "../components/blog/blog-page";
import Footer from "../components/footer";

const News = () => {
  return (
    <Layout pageTitle="News Page || NT Momineen">
      <HeaderOne />
      <StickyHeader />
      <PageHeader title="News Page" crumbTitle="News" />
      <BlogPage />
      <Footer />
    </Layout>
  );
};

export default News;

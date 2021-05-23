import React from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import GalleryPage from "../components/gallery/gallery-page";
import PageHeader from "../components/page-header";
import Footer from "../components/footer";

const Gallery = () => {
  return (
    <Layout pageTitle="Gallery NT Momineen">
      <HeaderOne />
      <StickyHeader />
      <PageHeader title="Gallery Page" crumbTitle="Gallery" />
      <GalleryPage />
      <Footer />
    </Layout>
  );
};

export default Gallery;

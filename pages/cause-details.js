import React from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import CauseContent from "../components/causes/cause-content";
import Footer from "../components/footer";

const CauseDetails = () => {
  return (
    <Layout pageTitle="Cause Details || NT Momineen">
      <HeaderOne />
      <StickyHeader />
      <PageHeader title="Cause Details" crumbTitle="Cause Details" />
      <CauseContent />
      <Footer />
    </Layout>
  );
};

export default CauseDetails;

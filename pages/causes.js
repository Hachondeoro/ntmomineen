import React from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import CausesPage from "../components/causes/causes-page";
import Footer from "../components/footer";

const Causes = () => {
  return (
    <Layout pageTitle="Donations || NT Momineen">
      <HeaderOne />
      <StickyHeader />
      <PageHeader title="Donations" crumbTitle="Donations" />
      <CausesPage />
      <Footer />
    </Layout>
  );
};

export default Causes;

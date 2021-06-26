import React from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import CausesPage from "../components/causes/causes-page";
import Membership from "../components/membership";
import Footer from "../components/footer";

const Causes = () => {
  return (
    <Layout
      pageTitle="Membership || NT Mominee"
      pageDescription="Northern Territory Momineen Incorporated application to be a member of the community"
      keyWords="Membership, member"
    >
      <HeaderOne />
      <StickyHeader />
      <PageHeader title="Membership" crumbTitle="Membership" />
      <Membership />
      <Footer />
    </Layout>
  );
};

export default Causes;

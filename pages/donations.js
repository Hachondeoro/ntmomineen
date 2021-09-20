import React from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import Footer from "../components/footer";
import DonationOptions from "@components/donation-options";

const Contact = () => {
  return (
    <Layout
      pageTitle="Donations || NT Mominee"
      pageDescription="Northern Territory Momineen Incorporated (NTMI) is an incorporated non-profit organization located in the Darwin area, Northern Territory, Australia. Please donate generously."
      keyWords="donations, stripe"
    >
      <HeaderOne />
      <StickyHeader />
      <PageHeader title="Donations" crumbTitle="Donations" />
      <DonationOptions />
      <Footer />
    </Layout>
  );
};

export default Contact;

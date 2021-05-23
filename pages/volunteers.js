import React from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import TeamPage from "../components/team/team-page";
import Footer from "../components/footer";

const Volunteers = () => {
  return (
    <Layout pageTitle="Our Volunteers || NT Momineen">
      <HeaderOne />
      <StickyHeader />
      <PageHeader title="Our Volunteers" crumbTitle="Our Volunteers" />
      <TeamPage />
      <Footer />
    </Layout>
  );
};

export default Volunteers;

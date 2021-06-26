import React from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import MainSlider from "../components/slider/main-slider";
import VideoCardTwo from "../components/videos/video-card-two";
import ServiceOne from "../components/services/service-one";
// import AboutCounter from "../components/about/about-counter";
import CausesHome from "../components/causes/causes-home";
import DonationOptions from "../components/donation-options";
import TeamHome from "../components/team/team-home";
import CallToActionTwo from "../components/call-to-action/call-to-action-two";
import GalleryTestimonials from "../components/gallery/gallery-testimonials";
import GalleryHome from "../components/gallery/gallery-home";
import TestimonialsTwo from "../components/testimonials/testimonials-two";
import CallToAction from "../components/call-to-action/call-to-action";
import GoogleMap from "../components/google-map";
import Footer from "../components/footer";
import Head from "next/head";

import { request } from "@components/DatoCMS/datocms.js";
const MYQUERY = `query MyQuery {
  allEvents {
    title
    date
    time
    location
    image {
      url
    }
  }
}
`;

export async function getStaticProps() {
  const data = await request({
    query: MYQUERY,
  });
  return {
    props: { data },
    revalidate: 10,
  };
}

const HomeOne = ({ data }) => {
  return (
    <Layout
      pageTitle="Home || NT Momineen"
      pageDescription="Northern Territory Momineen Incorporated for the Shia Ithna Asheri Muslim community of Darwin, Australia"
      keyWords = "Shias in Darwin, Darwin Shias, Momineen darwin"
    >
      <HeaderOne />
      <StickyHeader />
      <MainSlider />
      <VideoCardTwo />
      <ServiceOne events={data.allEvents} />
      {/* <AboutCounter /> */}
      {/* <CausesHome /> */}
      <DonationOptions />
      <TeamHome />
      <GalleryTestimonials>
        <GalleryHome />
        {/* <TestimonialsTwo /> */}
      </GalleryTestimonials>
      <CallToAction />
      <GoogleMap extraClass="home" />
      <Footer />
    </Layout>
  );
};

export default HomeOne;

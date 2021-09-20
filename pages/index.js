import { request } from "@components/DatoCMS/datocms.js";
import React from "react";
import DonationOptions from "../components/donation-options";
import Footer from "../components/footer";
import GalleryHome from "../components/gallery/gallery-home";
import GalleryTestimonials from "../components/gallery/gallery-testimonials";
import GoogleMap from "../components/google-map";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import Layout from "../components/layout";
import ServiceOne from "../components/services/service-one";
import MainSlider from "../components/slider/main-slider";
import TeamHome from "../components/team/team-home";
import VideoCardTwo from "../components/videos/video-card-two";

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
  allUpcomingEvents {
    dateAndTime
    day
    address
    contact
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
      pageTitle="NT Momineen Incorporated"
      pageDescription="Serving the Shia Ithna Asheri Muslim community of Darwin, Australia"
      keyWords="Shias in Darwin, Darwin Shias, Momineen darwin">
      <HeaderOne />
      <StickyHeader />
      <MainSlider />
      <VideoCardTwo />
      <ServiceOne events={data} />
      {/* <AboutCounter /> */}
      {/* <CausesHome /> */}
      <DonationOptions />
      <TeamHome />
      <GalleryTestimonials>
        <GalleryHome />
        {/* <TestimonialsTwo /> */}
      </GalleryTestimonials>
      <GoogleMap extraClass="home" />
      <Footer />
    </Layout>
  );
};

export default HomeOne;

import React from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import Footer from "../components/footer";
import { Container } from "react-bootstrap";
import EventCard from "@components/event/event-card";
import PostPaginations from "@components/post-paginations";


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


const Events = ({ data }) => {
  return (
    <Layout pageTitle="Events ||NT Momineen">
      <HeaderOne />
      <StickyHeader />
      <PageHeader title="Events" crumbTitle="Events" />
      <section className="event-page pt-120 pb-120">
        <Container>
          <div className="event-grid">
            {data.allEvents.map((event, index) => (
              <EventCard data={event} key={`event-card-key-${index}`} />
            ))}
          </div>
          <PostPaginations />
        </Container>
      </section>
      <Footer />
    </Layout>
  );
};

export default Events;

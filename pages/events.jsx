import { request } from "@components/DatoCMS/datocms.js";
import EventCard from "@components/event/event-card";
import PostPaginations from "@components/post-paginations";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import ReactMarkdown from "react-markdown";
import Footer from "../components/footer";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import Layout from "../components/layout";
import PageHeader from "../components/page-header";

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
  allFacebookPosts {
    title
    description
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
  const allFacebookPosts = data.allFacebookPosts[0].image.map((v) => ({
    original: v.url,
    thumbnail: v.url,
  }));
  return (
    <Layout
      pageTitle="Events ||NT Momineen"
      pageDescription="Events that will be hosted by the organisation. Currently we have annual meeting held fortnightly"
      keyWords="events">
      <HeaderOne />
      <StickyHeader />
      <PageHeader title="Events" crumbTitle="Events" />
      <section className="event-page pt-120 pb-120">
        <Container>
          <Row>
            {data.allFacebookPosts.map((event) => (
              <Col md={5} className="mt-2">
                <h2 style={{ fontVariant: "all-small-caps", fontWeight:900 }}>{event.title}</h2>
                <ReactMarkdown source={`${event.description}`} />
                <ImageGallery
                  items={event.image.map((v) => ({
                    original: v.url,
                    thumbnail: v.url,
                    
                    thumbnailHeight: "60px",
                  }))}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <Footer />
    </Layout>
  );
};

export default Events;

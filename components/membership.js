import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { Container, Row, Col } from "react-bootstrap";
import { Parallax } from "rc-scroll-anim";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { HomeOutlined, IdcardOutlined, UserOutlined } from "@ant-design/icons";
import { isMobile } from "react-device-detect";
import WAlogo from "@assets/images/wild-apricot-logo.png";

const navmenu = {
  fontFamily:
    '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
  textAlign: "center",
  background: "#FCAD30",
  color: "white",
  fontWeight: "700",
  fontSize: "25px",
};

const Membership = () => {
  const [tabIndex, setTabIndex] = useState(0);

  function iOS() {
    return (
      [
        "iPad Simulator",
        "iPhone Simulator",
        "iPod Simulator",
        "iPad",
        "iPhone",
        "iPod",
      ].includes(navigator.platform) ||
      // iPad on iOS 13 detection
      (navigator.userAgent.includes("Mac") && "ontouchend" in document)
    );
  }

  const [iosdevice, setIosdevice] = useState(true);
  const [phone, setPhone] = useState(false);

  useEffect(() => {
    setIosdevice(iOS());
    setPhone(isMobile);
  }, []);

  return (
    <div style={navmenu}>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>
            <HomeOutlined /> Home
          </Tab>
          <Tab>
            <IdcardOutlined /> Join us
          </Tab>
          <Tab>
            <UserOutlined /> Login
          </Tab>
        </TabList>
        <TabPanel>
          <div>
            <div className="custom">
              <Row className="justify-content-md-center">
                <Col lg={6}>
                  <br></br>
                  <h3>Who is eligible to be a member?</h3>
                  <ul className="list-unstyled ul-list-one">
                    <li>An individual, 18 years of age and over</li>
                    <li>
                      Membership is only offered to individuals, no family
                      memberships
                    </li>
                  </ul>
                  <br />
                  <h3>Application for membership:</h3>
                  <p>
                    To apply for membership of the Northern Territory Momineen
                    Incorporated, the applicant must fill and submit an
                    application through this website and pay the annual
                    membership.
                  </p>
                  <br />
                  <h3>Consideration of application:</h3>
                  <p>
                    The Management Committee will decide on the application and
                    advice the applicant on the outcome at the earliest time
                    possible.
                  </p>
                  <button
                    onClick={(index) => setTabIndex(1)}
                    className="thm-btn "
                  >
                    Register Now!
                  </button>
                  <br />
                  <br />
                  <p style={{ fontSize: "0.7em", textAlign: "right", marginRight:"10px"}}>
                    Proudly sponsored by &copy;SAMAF
                  </p>
                  <br></br>
                  <br></br>
                </Col>
              </Row>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            {iosdevice ? (
              <div className="custom">
                <div className="mb-6">
                  <br></br>
                  <br></br>
                  <br></br>
                  <h3>Application Form</h3>
                  <br></br>
                  <p>
                    Our membership page is powered by Wild Apricot membership
                    system
                  </p>
                </div>
                <Col
                  xs={{ span: 20 }}
                  md={{ span: 12 }}
                  className="m-auto"
                  align="middle"
                  justify="center"
                >
                  <img
                    src={WAlogo}
                    alt="wildapricotlogo"
                    width="100%"
                    height="100%"
                    className="mt-5"
                  />
                </Col>
                <br></br>
                <div className="m-5">
                  <p>
                    Please press the following button to submit an application
                    form
                  </p>
                </div>
                <a
                  href="https://ntmomineen.wildapricot.org/widget/membership"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <button className="thm-btn ">
                    Membership Application form
                  </button>
                </a>
                <br></br>
                <br></br>
              </div>
            ) : (
              <div className="custom">
                <iframe
                  width="100%"
                  height="1000px"
                  frameBorder="no"
                  src="https://ntmomineen.wildapricot.org/widget/join-us"
                ></iframe>
                <br></br>
                <br></br>
              </div>
            )}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="custom">
            <iframe
              width="100%"
              height="1000px"
              frameBorder="no"
              src="https://ntmomineen.wildapricot.org/widget/Sys/Profile"
            ></iframe>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Membership;

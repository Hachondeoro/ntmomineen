import EventCard from "@components/event/event-card";
import islamicCalendar from "public/shiacalendar2.pdf";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import serviceBg from "../../assets/images/backgrounds/service-hand-bg-1-1.png";
import serviceLine from "../../assets/images/shapes/service-line-1-1.png";

import BTable from "react-bootstrap/Table";
import { useTable } from "react-table";
import axios from "axios";

const ServiceOne = (props) => {
  const [prayer_times, setPrayer_times] = useState();
  const [alt_date, setAlt_date] = useState();
  useEffect(() => {
    const calculate_prayer_times = async () => {
      const dateObj = new Date();
      const day = dateObj.getUTCDate();
      const month = dateObj.getUTCMonth() + 1; //months from 1-12
      const year = dateObj.getUTCFullYear();
      const prayer_times = await axios
        .get(
          `https://api.aladhan.com/v1/calendarByCity?city=Darwin&country=Australia&method=0&month=${month}&year=${year}`,
        )
        .then((res) => {
          const current_day = res.data.data[day - 1];
          let alt_date = current_day.date.hijri;
          let alt_date_string = `${alt_date.day} ${alt_date.month.en} ${alt_date.year}
          -  ${alt_date.month.ar} ${alt_date.weekday.ar}`;
          setAlt_date(alt_date_string);
          const prayer_day = current_day.timings;
          return prayer_day;
        });
      const times = Object.keys(prayer_times);
      const period = Object.values(prayer_times);
      const result = period.map((val, i) => ({ time: val, period: times[i] })); // for the table
      setPrayer_times(result);
    };
    calculate_prayer_times();
  }, []);

  const columns_prayers = React.useMemo(
    () => [
      { Header: "Period", accessor: "period" },
      { Header: "Time", accessor: "time" },
    ],
    [],
  );

  const data = React.useMemo(() => props.events.allUpcomingEvents, []);
  // prettier-ignore
  const columns = React.useMemo(
    () => [
      { Header: "Date & Time", accessor: "dateAndTime"},
      { Header: "Day", accessor: "day"},
      { Header: "Address", accessor: "address"},
      { Header: "Contact", accessor: "contact"},
    ],
    [],
  );

  function Table({ columns, data }) {
    const { getTableProps, headerGroups, rows, prepareRow } = useTable({
      columns,
      data,
    });

    return (
      <BTable striped bordered hover size="sm" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </BTable>
    );
  }

  return (
    <section className="service-one pt-120 pb-10" style={{ backgroundImage: `url(${serviceBg})` }}>
      <Container>
        <img src={serviceLine} alt="" className="service-one__shape-1" />
        <Row>
          <Col sm={6}>
            <div className="block-title">
              <a
                className="scroll-to-target thm-btn"
                data-target=".donate-options"
                href={islamicCalendar}
                target="_blank">
                Download Yearly Islamic Calendar 1442A.H.
              </a>
            </div>
          </Col>
          <Col sm={6}>
            {prayer_times && (
              <div>
                <h2>Prayer Time - Darwin</h2>
                <p>
                  {new Date().toDateString()} - {alt_date}
                </p>
                <div style={{ fontSize: "0.7em" }}>
                  <Table columns={columns_prayers} data={prayer_times} />
                </div>
              </div>
            )}
          </Col>
        </Row>
        <div className="block-title">
          <h3>Upcoming events</h3>
          <div style={{ fontSize: "0.7em" }}>
            <Table columns={columns} data={data} />
          </div>
          <br/>
          <br/>
          <Row>
            {props.events.allCalendars.map((event, index) => (
              <Col sm={6}>
                <div key={event.title}>
                  <p>{event.title}</p>
                  <img src={event.image.url} alt={event.title} width="100%" />
                </div>
              </Col>
            ))}
          </Row>
          <section className="event-page pt-20">
            <Container>
              <div className="event-grid">
                {props.events.allEvents.map((event, index) => (
                  <EventCard data={event} key={`event-card-key-${index}`} />
                ))}
              </div>
            </Container>
          </section>
        </div>
      </Container>
    </section>
  );
};

export default ServiceOne;

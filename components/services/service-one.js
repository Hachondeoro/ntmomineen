import EventCard from "@components/event/event-card";
import islamicCalendar from "public/shiacalendar2.pdf";
import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import serviceBg from "../../assets/images/backgrounds/service-hand-bg-1-1.png";
import serviceLine from "../../assets/images/shapes/service-line-1-1.png";

import BTable from "react-bootstrap/Table";
import {useTable} from "react-table";
import {PrayTimes} from "../../assets/PrayTimes";

const ServiceOne = (props) => {
  var prayTimes = new PrayTimes();
  prayTimes.setMethod("Jafari");
  var date = new Date(); // today
  var times_clock = prayTimes.getTimes(date, [-12.476632, 130.987125], 10, 1);
  var list_times = ["Fajr", "Sunrise", "Dhuhr", "Sunset", "Maghrib"];
  var list_times_lowercase = list_times.map((v) => v.toLowerCase()); // to filter times returned
  const full_list = list_times_lowercase.reduce((obj, key) => ({ ...obj, [key]: times_clock[key] }), {});
  const result = list_times.map((val, i) => ({ period: val, time: Object.values(full_list)[i] })); // for the table

  const data_prayers = React.useMemo(() => result, []);
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
            <div>
              <h2>Prayer Time - Darwin</h2>
              <div style={{ fontSize: "0.7em" }}>
                <Table columns={columns_prayers} data={data_prayers} />
              </div>
            </div>
          </Col>
        </Row>
        <div className="block-title">
          <h3>Upcoming events</h3>
          <div style={{ fontSize: "0.7em" }}>
            <Table columns={columns} data={data} />
          </div>
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

import EventCard from "@components/event/event-card";
import islamicCalendar from "public/shiacalendar2.pdf";
import React from "react";
import { Container } from "react-bootstrap";
import serviceBg from "../../assets/images/backgrounds/service-hand-bg-1-1.png";
import serviceLine from "../../assets/images/shapes/service-line-1-1.png";

import BTable from "react-bootstrap/Table";
import { useTable } from "react-table";

const ServiceOne = (props) => {
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
        <div className="block-title">
          <a
            className="scroll-to-target thm-btn"
            data-target=".donate-options"
            href={islamicCalendar}
            target="_blank">
            Download Yearly Islamic Calendar 1442A.H.
          </a>
        </div>
        <div className="block-title">
          <h3>Upcoming events</h3>
          <div style={{fontSize:"0.7em"}}>
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

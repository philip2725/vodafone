import { useState, useEffect } from "react";

import "./myActivities.css";
import { getMyRequests } from "../services/tickets";

import HorizontalMenu from "../components/HorizontalMenu";

import CollapsibleTable from "../components/CollapsibleTable";
import TicketDetail from "../components/TicketDetail";
import MyOrder from "../components/MyOrder";

function MyActivities(props) {
  //determine the state of the horizontal menu (Meine Anfragen, Meine Bestellungen)
  const [menuIndex, setMenuIndex] = useState(0);

  //saves the data from the "backend" which will be requested in useEffect Hook
  const [tickets, setTickets] = useState({});

  //saves information about the selected row, the selected activity and the visibility state of detail Page
  const [detailPage, setDetailPage] = useState({
    visible: false,
    row: {},
    activity: {
      id: "",
      start: "",
      end: "",
      message: "",
    },
  });

  //sample data for orders
  const myOrders = [
    {
      orderDate: "03.03.2023",
      total: "300,95",
      adress: {
        name: "Benjamin Gusek",
        street: "Scharnhorststraße 3",
        zip: "51375",
        city: "Leverkusen",
      },
      orderId: "307-42535435345",
      product: {
        name: "Apple iPhone 14 Pro 128GB Space Schwarz Dual Sim",
        price: "300,95",
        deliveryDate: "04.03.2023",
        deliveryStatus: 0,
      },
    },
    {
      orderDate: "05.03.2023",
      total: "50,95",
      adress: {
        name: "Mareike",
        street: "Rudolfstraße 1",
        zip: "50665",
        city: "Köln",
      },
      orderId: "307-45664343455",
      product: {
        name: "Apple iPhone 14 Pro Protection Case Blau",
        price: "45,00",
        deliveryDate: "10.03.2023",
        deliveryStatus: 2,
      },
    },
    {
      orderDate: "05.03.2023",
      total: "50,95",
      adress: {
        name: "Mareike",
        street: "Rudolfstraße 1",
        zip: "50665",
        city: "Köln",
      },
      orderId: "307-12",
      product: {
        name: "Apple iPhone 14 Pro Protection Case Blau",
        price: "45,00",
        deliveryDate: "10.03.2023",
        deliveryStatus: 4,
      },
    },
    {
      orderDate: "05.03.2023",
      total: "50,95",
      adress: {
        name: "Mareike",
        street: "Rudolfstraße 1",
        zip: "50665",
        city: "Köln",
      },
      orderId: "307-6546542",
      product: {
        name: "Apple iPhone 14 Pro Protection Case Blau",
        price: "45,00",
        deliveryDate: "10.03.2023",
        deliveryStatus: 5,
      },
    },
  ];

  useEffect(() => {
    //normally request get to the backend async

    async function prepareData() {
      let data = await getMyRequests();
      setTickets(data);
    }

    prepareData();
  }, []);

  //will be called from a "manage" button inside a row (CollapsibleTable) and receives the rows data
  function openDetailPage(row) {
    //sets the first activity in row as default selected
    let selectedActivity = row.activities[0];
    let start = `${selectedActivity.activityStart.startDate} , ${selectedActivity.activityStart.startTime}`;
    let end = `${selectedActivity.activityFinish.finishDate} , ${selectedActivity.activityFinish.finishTime}`;
    setDetailPage({
      visible: true,
      row,
      activity: {
        id: selectedActivity.activityCode,
        start,
        end,
        message: selectedActivity.customerMessage,
      },
    });
  }

  return (
    <>
      <h1>Meine Aktivitäten</h1>

      <HorizontalMenu
        tabs={[
          { id: 0, name: "Meine Anfragen" },
          { id: 1, name: "Meine Bestellungen" },
        ]}
        active={menuIndex}
        onClick={setMenuIndex}
      />

      {menuIndex === 0 && (
        <>
          <CollapsibleTable data={tickets} handler={openDetailPage} />

          <TicketDetail data={detailPage} handler={setDetailPage} />
        </>
      )}

      {menuIndex === 1 && (
        <>
          {myOrders.map((order) => {
            return (
              <MyOrder data={order} key={order.orderId} detailPage={false} />
            );
          })}
        </>
      )}
    </>
  );
}

export default MyActivities;

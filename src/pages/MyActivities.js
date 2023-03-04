import { useState, useEffect } from "react";

import "./MyActivities.css";
import { getMyRequests } from "../services/tickets";

import HorizontalMenu from "../components/HorizontalMenu";

import CollapsibleTable from "../components/CollapsibleTable";
import TicketDetail from "../components/TicketDetail";

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

  useEffect(() => {
    //normally request get to the backend async

    async function prepareData() {
      let data = await getMyRequests();
      setTickets(data);
    }

    prepareData();
  }, []);

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

      <CollapsibleTable data={tickets} handler={openDetailPage} />

      <TicketDetail data={detailPage} handler={setDetailPage} />
    </>
  );
}

export default MyActivities;

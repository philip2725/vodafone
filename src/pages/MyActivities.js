import { useState, useEffect } from "react";

import HorizontalMenu from "../components/HorizontalMenu";
import { getMyRequests } from "../services/tickets";

import "./MyActivities.css";

function MyActivities(props) {
  const [menuIndex, setMenuIndex] = useState(0);
  const [requests, setRequests] = useState({});

  useEffect(() => {
    //normally request get to the backend async

    async function prepareData(params) {
      let data = await getMyRequests();
      setRequests(data);
    }

    prepareData();
  }, []);

  return (
    <>
      <h1>{menuIndex === 0 ? "Meine Anfragen" : "Meine Bestellungen"}</h1>

      <HorizontalMenu
        tabs={[
          { id: 0, name: "Meine Anfragen" },
          { id: 1, name: "Meine Bestellungen" },
        ]}
        active={menuIndex}
        onClick={setMenuIndex}
      />
    </>
  );
}

export default MyActivities;

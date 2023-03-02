import { useState } from "react";

import HorizontalMenu from "../components/HorizontalMenu";

function MyActivities(props) {
  const [menuIndex, setMenuIndex] = useState(0);

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

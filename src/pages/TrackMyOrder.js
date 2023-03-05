import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import MyOrder from "../components/MyOrder";

function TrackMyOrder(props) {
  let { state } = useLocation();
  const [data, setData] = useState();

  useEffect(() => {
    setData(state);
  }, [state]);

  if (!data) {
    return <div>No Product found</div>;
  }

  return (
    <>
      <h1>Zustellung am {data.product.deliveryDate}</h1>

      <MyOrder data={data} detailPage={true} />
    </>
  );
}

export default TrackMyOrder;

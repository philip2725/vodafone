import "./MyOrder.css";
import productImage from "../assets/iphone.webp";

import { useNavigate } from "react-router-dom";

import ProgressStepper from "./ProgressStepper";
import Map from "./Map";

function MyOrder(props) {
  const { data, detailPage } = props;
  const navigate = useNavigate();

  function handleTraceDelivery() {
    navigate(`/lieferung/${data.orderId}`, { state: data });
  }

  console.log(data);
  return (
    <div className="order-container">
      <div className="order-header-container">
        <div className="order-header-info">
          <span className="order-header-info-span">Bestellung aufgegeben</span>
          <span>{data.orderDate}</span>
        </div>
        <div className="order-header-info">
          <span className="order-header-info-span">Summe</span>
          <span>€{data.total}</span>
        </div>

        <div className="order-header-info">
          <span className="order-header-info-span">Versandadresse</span>
          <span>{data.adress.name}</span>
        </div>

        <div className="order-header-info">
          <span className="order-header-info-span">Bestellnummer</span>
          <span>{data.orderId}</span>
        </div>
      </div>

      <div className="order-content-container">
        <h3>Zustellung am {data.product.deliveryDate}</h3>
        <div className="order-product-container">
          <img src={productImage} height={50} alt="Iphone 14 Pro 128GB" />
          <span>{data.product.name}</span>
          <div className="trace-delivery-btn-container">
            {!detailPage && (
              <button className="manage-btn" onClick={handleTraceDelivery}>
                Lieferung verfolgen
              </button>
            )}
          </div>
        </div>

        {detailPage && (
          <div className="trackTrace-container">
            <ProgressStepper deliveryStatus={data.product.deliveryStatus} />
            <div className="map-container">
              <Map />
            </div>
          </div>
        )}

        {detailPage && data.product.deliveryStatus === 4 && (
          <div className="trackTrace-actions-container">
            <button className="manage-btn">Sie sind nicht da?</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyOrder;

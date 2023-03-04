import "./TicketDetail.css";

import closeIcon from "../assets/close.png";
import ColorsTimeline from "../components/Timeline";

import { useEffect, useRef } from "react";

function TicketDetail(props) {
  const { data, handler } = props;

  const ref = useRef(null);

  useEffect(() => {
    const closeTicketDetail = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handler((prevState) => {
          return { ...prevState, visible: false };
        });
      }
    };
    document.addEventListener("click", closeTicketDetail, true);
    return () => {
      document.removeEventListener("click", closeTicketDetail, true);
    };
  }, []);

  return (
    <div className={`detailPage-overlay ${data.visible && "show-detailPage"}`}>
      <div className="detailPage-container" ref={ref}>
        <button
          className="detailPage-close-btn"
          onClick={() => handler({ ...data, visible: false })}
        >
          <img src={closeIcon} alt="close button" width={30} />
        </button>

        <h2>Anfrage mit der ID: {data.row.woNum}</h2>

        <span
          className={
            data.row.woStatusText === "Completed"
              ? "status-completed"
              : "status-inProgress"
          }
        >
          {data.row.woStatusText}
        </span>

        <div className="detailPage-content">
          {data.row.activities && (
            <ColorsTimeline data={data} handler={handler} />
          )}

          <div className="detailPage-info-container">
            <p>Start der Aktivität: {data.activity.start} </p>
            <p>Ende der Aktivität: {data.activity.end}</p>
            <p>Kundennachricht: {data.activity.message}</p>
          </div>
        </div>
        <div className="detailPage-buttons-container">
          {data.row.reopenable && (
            <button className="manage-btn detailPage-action-button">
              Ticket erneut öffnen
            </button>
          )}
          {data.row.cancelable && (
            <button className="manage-btn detailPage-action-button">
              Ticket schließen
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default TicketDetail;

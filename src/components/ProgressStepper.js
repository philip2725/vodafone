import "./progressStepper.css";

function ProgressStepper(props) {
  const { deliveryStatus } = props;

  function renderProgressBar(state) {
    if (deliveryStatus === state - 1) {
      return "progressline-bar-half";
    }

    if (deliveryStatus === state || deliveryStatus > state) {
      return "progressline-bar-full";
    }
  }

  function renderCheckmark(state) {
    if (deliveryStatus === state || deliveryStatus > state) {
      return "progressline-checkmark-filled";
    }
  }

  return (
    <div className="progressline">
      <div className="progressline-container">
        <div className="progressline-status">
          <div className={`progressline-bar ${renderProgressBar(1)}`}></div>
          <div className={`progressline-checkmark ${renderCheckmark(1)}`}></div>
        </div>

        <div className="progressline-content">
          <span>
            Die Auftragsdaten zu dieser Sendung wurden vom Absender elektronisch
            an DHL übermittelt
          </span>
        </div>
      </div>

      <div className="progressline-container">
        <div className="progressline-status">
          <div className={`progressline-bar ${renderProgressBar(2)}`}></div>
          <div className={`progressline-checkmark ${renderCheckmark(2)}`}></div>
        </div>

        <div className="progressline-content">
          <span>Die Sendung wurde im Start-Paketzentrum bearbeitet</span>
        </div>
      </div>

      <div className="progressline-container">
        <div className="progressline-status">
          <div className={`progressline-bar ${renderProgressBar(3)}`}></div>
          <div className={`progressline-checkmark ${renderCheckmark(3)}`}></div>
        </div>

        <div className="progressline-content">
          <span>Die Sendung wurde im Ziel-Paketzentrum bearbeitet</span>
        </div>
      </div>

      <div className="progressline-container">
        <div className="progressline-status">
          <div className={`progressline-bar ${renderProgressBar(4)}`}></div>
          <div className={`progressline-checkmark ${renderCheckmark(4)}`}></div>
        </div>

        <div className="progressline-content">
          <span>Die Sendung wurde in das Zustellfahrzeug geladen</span>
        </div>
      </div>

      <div className="progressline-container">
        <div className="progressline-status">
          <div className={`progressline-bar ${renderProgressBar(5)}`}></div>
          <div className={`progressline-checkmark ${renderCheckmark(5)}`}></div>
        </div>

        <div className="progressline-content">
          <span>Sendung wurde Zugestellt</span>
        </div>
      </div>
    </div>
  );
}

export default ProgressStepper;

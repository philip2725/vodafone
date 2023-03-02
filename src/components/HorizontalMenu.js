import "./HorizontalMenu.css";

function HorizontalMenu(props) {
  return (
    <div className={`tab-horizontal ${props.className}`}>
      {props.tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => props.onClick(tab.id)}
          className={`tab-h-item ${
            props.active === tab.id && "tab-h-item-active"
          }`}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
}

export default HorizontalMenu;

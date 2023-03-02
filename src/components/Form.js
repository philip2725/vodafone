import "./Form.css";

export function TextInput(props) {
  return (
    <>
      {
        //label
        //className
        //type
        //onChange
        //errorMessage
        //invalid
        //name
      }
      {props.label && <label>{props.label}</label>}

      <input
        className={`form-input ${props.invalid && "form-input-error"} ${
          props.className && props.className
        }`}
        type={props.type ? props.type : "text"}
        name={props.name}
        onChange={props.onChange}
      />
      <span className="input-error-msg">
        {props.invalid && props.errorMessage}
      </span>
    </>
  );
}
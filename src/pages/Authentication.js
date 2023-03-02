import { useState } from "react";

import "./Authentication.css";
import closeIcon from "../assets/close.png";

import { isEmail } from "../helpers/validate";
import { TextInput } from "../components/Form";

function Authentication(props) {
  const [hasAccount, setHasAccount] = useState(false);
  const [loginData, setLoginData] = useState({});
  const [inputState, setInputState] = useState({});

  function handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  }

  function handleLogin(event) {
    event.preventDefault();

    //inputState data
    let validInput = validateInput();

    if (!validInput) {
      return;
    }

    //login action
  }

  function validateInput() {
    const email = loginData.username;
    const password = loginData.password;
    let invalid = {};

    if (!isEmail(email)) {
      invalid["email"] = "Die angegebene E-Mail ist nicht korrekt";
    }

    if (!email) {
      invalid["email"] = "Deine E-Mail Adresse fehlt";
    }

    if (!password) {
      invalid["password"] = "Dein Password fehlt";
    }
    setInputState(invalid);
    return Object.keys(invalid).length === 0;
  }

  return (
    <div className={props.visibility ? "show-login" : "hide-login"}>
      <div className="login-content">
        <button
          className="login-close-btn"
          onClick={props.handleLoginVisibility}
        >
          <img src={closeIcon} alt="close button" width={30} />
        </button>

        <h1>MeinVodafone</h1>

        <div className="tab">
          <button
            onClick={() => setHasAccount(false)}
            className={hasAccount ? "tab-item" : "tab-item tab-item-active"}
          >
            Anmelden
          </button>
          <button
            onClick={() => setHasAccount(true)}
            className={hasAccount ? "tab-item tab-item-active" : "tab-item"}
          >
            Registrieren
          </button>
        </div>

        <section
          className="login-section"
          style={hasAccount ? { display: "none" } : { display: "flex" }}
        >
          <h2>Login zu MeinVodafone</h2>
          <p>
            Verwalte deine Verträge, Kundendaten und Geräteeinstellungen für
            MeinVodafone
          </p>

          <form className="form" onSubmit={handleLogin}>
            <TextInput
              label="E-Mail Adresse"
              name="username"
              type="email"
              onChange={handleInputChange}
              invalid={inputState.email}
              errorMessage={inputState.email}
            />

            <TextInput
              label="Passwort"
              name="password"
              type="password"
              onChange={handleInputChange}
              invalid={inputState.password}
              errorMessage={inputState.password}
            />

            <input type="submit" value="Login" />
          </form>

          <button className="button-underline">Zugangsdaten vergessen</button>
          <button
            className="button-underline"
            onClick={() => setHasAccount(true)}
          >
            Registrieren
          </button>
        </section>

        <section
          style={hasAccount ? { display: "block" } : { display: "none" }}
        >
          <h2>Registrierung zurzeit nicht verfügbar!</h2>
          <p style={{ maxWidth: "800px", margin: "0 auto" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam nihil, eveniet
            aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur
            error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
            quia.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Authentication;

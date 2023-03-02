import { useState } from "react";

import "./Authentication.css";
import closeIcon from "../assets/close.png";

import { validateLoginInput, validateRegisterInput } from "../helpers/validate";
import { TextInput } from "../components/Form";

function Authentication(props) {
  const [hasAccount, setHasAccount] = useState(true);
  const [loginData, setLoginData] = useState({});
  const [registerData, setRegisterData] = useState({});
  const [inputState, setInputState] = useState({});

  function handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    if (hasAccount) {
      setLoginData({
        ...loginData,
        [name]: value,
      });
    } else {
      setRegisterData({
        ...registerData,
        [name]: value,
      });
    }
  }

  function handleLogin(event) {
    event.preventDefault();

    //inputState data
    let { valid, errors } = validateLoginInput(loginData);
    setInputState(errors);

    if (!valid) {
      return;
    }

    //login action
    console.log("I am on a good way to be logged in ");
  }

  function handleSignUp(event) {
    event.preventDefault();

    let { valid, errors } = validateRegisterInput(registerData);
    setInputState(errors);
    if (!valid) {
      return;
    }

    console.log("I am on a good way to be registered");
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
            onClick={() => setHasAccount(true)}
            className={hasAccount ? "tab-item tab-item-active" : "tab-item"}
          >
            Anmelden
          </button>
          <button
            onClick={() => setHasAccount(false)}
            className={hasAccount ? "tab-item" : "tab-item tab-item-active"}
          >
            Registrieren
          </button>
        </div>

        <h2>
          {hasAccount
            ? "Login zu MeinVodafone"
            : "Registrierung zu MeinVodafone"}
        </h2>
        <p>
          Verwalte deine Verträge, Kundendaten und Geräteeinstellungen für
          MeinVodafone
        </p>

        <section
          className="login-section"
          style={hasAccount ? { display: "flex" } : { display: "none" }}
        >
          <form className="form" onSubmit={handleLogin}>
            <TextInput
              label="E-Mail Adresse"
              name="email"
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
            onClick={() => setHasAccount(false)}
          >
            Registrieren
          </button>
        </section>

        <section
          className="login-section"
          style={hasAccount ? { display: "none" } : { display: "flex" }}
        >
          <form className="form" onSubmit={handleSignUp}>
            <TextInput
              label="Dein Vorname"
              name="firstname"
              type="text"
              onChange={handleInputChange}
              invalid={inputState.firstname}
              errorMessage={inputState.firstname}
            />

            <TextInput
              label="Dein Nachname"
              name="lastname"
              type="text"
              onChange={handleInputChange}
              invalid={inputState.lastname}
              errorMessage={inputState.lastname}
            />

            <TextInput
              label="E-Mail Adresse"
              name="email"
              type="email"
              onChange={handleInputChange}
              invalid={inputState.registerEmail}
              errorMessage={inputState.registerEmail}
            />

            <TextInput
              label="E-Mail Adresse bestätigen"
              name="emailConfirm"
              type="email"
              onChange={handleInputChange}
              invalid={inputState.emailConfirm}
              errorMessage={inputState.emailConfirm}
            />

            <TextInput
              label="Passwort"
              name="password"
              type="password"
              onChange={handleInputChange}
              invalid={inputState.registerPassword}
              errorMessage={inputState.registerPassword}
            />

            <input type="submit" value="Registrieren" />
          </form>

          <button
            className="button-underline"
            onClick={() => setHasAccount(true)}
          >
            Anmelden
          </button>
        </section>
      </div>
    </div>
  );
}

export default Authentication;

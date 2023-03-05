function isEmail(email) {
  if (!email) {
    return;
  }
  // eslint-disable-next-line
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (email.match(regex)) {
    return true;
  } else {
    return false;
  }
}

export function validateLoginInput(data) {
  const email = data.email;
  const password = data.password;

  let errors = {};

  if (!isEmail(email)) {
    errors["email"] = "Die angegebene E-Mail ist nicht korrekt";
  }

  if (!email) {
    errors["email"] = "Deine E-Mail Adresse fehlt";
  }

  if (!password) {
    errors["password"] = "Dein Passwort fehlt";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors: errors,
  };
}

export function validateRegisterInput(data) {
  const firstname = data.firstname;
  const lastname = data.lastname;
  const emailConfirm = data.emailConfirm;
  const email = data.email;
  const password = data.password;

  let errors = {};

  if (!isEmail(email)) {
    errors["registerEmail"] = "Die angegebene E-Mail ist nicht korrekt";
  }

  if (!email) {
    errors["registerEmail"] = "Deine E-Mail Adresse fehlt";
  }

  if (!emailConfirm || email !== emailConfirm) {
    errors["emailConfirm"] = "Deine E-Mail Adressen stimmen nicht überein";
  }

  if (!firstname) {
    errors["firstname"] = "Deine Vorname fehlt";
  }
  if (!lastname) {
    errors["lastname"] = "Dein Nachname fehlt";
  }

  if (!password) {
    errors["registerPassword"] = "Dein Passwort fehlt";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors: errors,
  };
}

export function isEmail(email) {
  if (!email) {
    return;
  }

  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (email.match(regex)) {
    return true;
  } else {
    return false;
  }
}

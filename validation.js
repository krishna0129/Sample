function fun() {
  var userv = document.forms[0].user.value;
  var pwdv = document.forms[0].pwd.value;
  var emailv = document.forms[0].email.value;
  var phv = document.forms[0].ph.value;
  var userreg = /^[0-9a-zA-Z]+$/;
  var emailreg = new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$");
  var phreg = new RegExp("^[0-9]{10}$");
  var ruser = userreg.exec(userv);
  var remail = emailreg.exec(emailv);
  var rph = phreg.exec(phv);

  if (ruser && remail && rph && pwdv.length > 6) {
    alert("All values are valid");
    return true;
  } else if (!ruser) {
    alert("Username is invalid");
  } else if (!remail) {
    alert("Email is invalid");
  } else if (!rph) {
    alert("Phone number is invalid");
  } else if (pwdv.length <= 6) {
    alert("Password is invalid");
  } else {
    alert("Invalid");
  }
  return false;
}
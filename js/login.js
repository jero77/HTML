var attempts = 3; //max. attempts
/**
  This function validates the input of the loginform from "index.html".
  Executes on click on the button named "Login"
  @see{@link index.html}
*/
function validate () {
  //Get form input
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  //try to validate it
  if (username == "guestuser" && password == "noadmin") {
    alert("Login was successful!");
    window.location = "authenticated.html";
    return false;
  } else {
    attempts--;
    alert("Wrong username and password! " + attempts + " attempts left.");
    if (attempts == 0) {
      document.getElementById("username").disabled = true;
      document.getElementById("password").disabled = true;
      document.getElementById("loginbutton").disabled = true;
    }
  }
}

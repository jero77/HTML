/**
  This function validates the input of the loginform from "index.html".
  Executes on click on the button named "Login"
  @see{@link index.html}
*/
function validate (username, password) {
  //Get form input
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  //try to validate it
  if (username == "guest" && password == "guest") {
    alert("Login was successful!");
    alert("Authenticated")
    //window.location = "authenticated.html";
  } else {
    alert("Wrong username and password!");
  }
}

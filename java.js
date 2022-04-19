const firstInputValue = document.querySelector(".firstInput");
const secondInputValue = document.querySelector(".secondInput");
const btn = document.querySelector(".button");

document.body.addEventListener("change", checkEquality);
document.body.addEventListener("change", checkPwd);

function checkEquality() {
  var password1 = document.getElementById("firstPW");
  var password2 = document.getElementById("secondPW");
  if (password1.value == password2.value) {
    console.log("Passwords match.");
    return true;
  } else {
    console.log("Passwords do not match.");
    return false;
  }

  document.getElementById("btn").addEventListener("click", showPassword);

  function showPassword(button) {
    var password1 = document.getElementById("firstPW");
    var password2 = document.getElementById("secondPW");
    if (password1.type && password2.type === "password") {
      password1.type = "text";
      password2.type = "text";
    } else {
      password1.type = "password";
      password2.type = "password";
    }
  }
}

function checkPwd() {
  var str = document.getElementsById("firstPW").value;
  if (str.length < 6) {
    console.log("too short");
    return;
  } else if (str.length > 50) {
    console.log("too long");
    return;
  } else if (str.search(/\d/) == -1) {
    console.log("no number");
    return;
  } else if (str.search(/[a-zA-Z]/) == -1) {
    console.log("no letter");
    return;
  } else if (str.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:]/) != -1) {
    console.log("bad character");
    return;
  }
  alert("oukeyleidokelei!!");
  return;
}

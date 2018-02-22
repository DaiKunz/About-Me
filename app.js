function Change() {
 var txt;
  if (confirm("Pressed a Button") == true) {
  txt ="You pressed the button";
  } else {
  txt = "You didn't press the button";
  }
  document.getElementById("demo").innerHTML = txt;
}

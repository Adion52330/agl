function adding() {
  a = document.getElementById("txt1").value;
  if (a == "") {
    alert("Please Enter in the textbox to add");
  } else {
    let b = document.createElement("li");
    let c = document.createTextNode(a);
    b.appendChild(c);
    const element = document.getElementById("googoo");
    element.appendChild(b);
  }
}

function ll() {
  a = document.getElementById("txt2").value;
  if (a == "") {
    alert("You have to enter your name to login");
    return false;
  } else {
    localStorage.setItem("name", a);
    document.getElementById("gg").style.display = "none";
    return false;
  }
}

function myFunction() {
    let x = document.getElementById("navbar");
    if (x.className === "nav") {
      x.className += "responsive";
    } else {
      x.className = "nav";
    }
  }

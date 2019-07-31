/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  if (document.getElementById("mobileNav")) {
    document.getElementById("mobileNav").style.width = "250px";
  }
  if (document.getElementById("main")) {
    document.getElementById("main").style.marginLeft = "250px";
  }
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  if (document.getElementById("mobileNav")) {
    document.getElementById("mobileNav").style.width = "0";
  }
  if (document.getElementById("main")) {
    document.getElementById("main").style.marginLeft = "0";
  }
}

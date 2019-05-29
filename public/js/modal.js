document.addEventListener("DOMContentLoaded", function(event) {
  var modalEl = document.querySelector(".modal");
  var list = document.querySelectorAll(".close-modal");
  for (var i = 0; i < list.length; ++i) {
    list[i].addEventListener("click", function() {
      modalEl.classList.toggle("active");
    });
  }
  var redeemModal = document.querySelector(".redeem-modal");
  var list = document.querySelectorAll(".close-modal");
  for (var i = 0; i < list.length; ++i) {
    list[i].addEventListener("click", function() {
      redeemModal.classList.toggle("active");
    });
  }
});

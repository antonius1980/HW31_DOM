'use strict';
document.querySelector(".lights").addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log("Клік по елементу списку:", event);
    event.target.classList.toggle("active");
    event.target.nextElementSibling.classList.toggle("active");
    console.log("Клік по елементу списку:", event.target.nextElementSibling);
  }
});
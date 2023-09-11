const toggler = document.querySelector(".nav__toggler");
const navbar = document.querySelector(".main-header");
toggler.addEventListener("click", (e) => {
  navbar.classList.toggle("nav__expanded");
});

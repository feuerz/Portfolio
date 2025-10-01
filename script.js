document.addEventListener("DOMContentLoaded", function () {
AOS.init();
new Typed("#typed", {
  strings: ["Manuel Manzano"],
    typeSpeed: 50,
  showCursor: true,
    cursorChar: "|",
    loop: false,
  });
  let navLinks = document.querySelectorAll("#navbarNav .nav-link");
  let navbarCollapse = document.getElementById("navbarNav");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false,
});
      bsCollapse.hide();
    });
  });


});

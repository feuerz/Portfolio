document.addEventListener("DOMContentLoaded", function () {
  // Inicializar AOS
  AOS.init();

  // Inicializar Typed.js
  new Typed("#typed", {
    strings: ["Manuel Manzano"],
    typeSpeed: 100,
    showCursor: true,
    cursorChar: "|",
    loop: false
  });

  // --- DARK MODE TOGGLE ---

  const toggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Aplicar preferencia guardada
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    toggle.textContent = "☀️";
  } else {
    toggle.textContent = "🌙";
  }

  // Función para animar el cambio de tema
  function animateTheme() {
    body.classList.add("theme-transition");
    setTimeout(() => body.classList.remove("theme-transition"), 400);
  }

  // Evento del botón de tema
  toggle.addEventListener("click", () => {
    animateTheme();
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
      toggle.textContent = "☀️";
      localStorage.setItem("theme", "dark");
    } else {
      toggle.textContent = "🌙";
      localStorage.setItem("theme", "light");
    }
  });

});

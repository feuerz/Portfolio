document.addEventListener("DOMContentLoaded", function () {
  // Inicializar AOS
  AOS.init();

  // Inicializar Typed.js
  new Typed("#typed", {
    strings: ["Manuel Manzano"],
    typeSpeed: 100,
    showCursor: true,
    cursorChar: "|",
    loop: false,
  });

  // --- DARK MODE TOGGLE ---
  const toggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Cargar tema guardado
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    toggle.checked = true;
  }

  // Cambiar tema
  toggle.addEventListener("change", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
});


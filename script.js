document.addEventListener("DOMContentLoaded", () => {
  // Inicialización de íconos Lucide
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Lógica del menú hamburguesa para dispositivos móviles
  const btnMenu = document.getElementById("btn-menu");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  if (btnMenu && mobileMenu) {
    btnMenu.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    // Cerrar menú al hacer clic en cualquier enlace
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  }

  // Manejo del formulario de consulta enviado hacia WhatsApp
  const formReserva = document.getElementById("form-reserva");

  if (formReserva) {
    formReserva.addEventListener("submit", (e) => {
      e.preventDefault();

      // Mensaje fijo para WhatsApp
      const mensaje = "Hola Hotel Granaderos! Me gustaría consultar disponibilidad para alguna habitación.";

      // Número de WhatsApp oficial del hotel
      const numeroWhatsApp = "5491130823712"; 
      const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

      window.open(url, "_blank");
    });
  }
});
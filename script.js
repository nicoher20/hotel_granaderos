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

  // Manejo del formulario de reserva enviado hacia WhatsApp
  const formReserva = document.getElementById("form-reserva");

  if (formReserva) {
    formReserva.addEventListener("submit", (e) => {
      e.preventDefault();

      const inputs = formReserva.querySelectorAll("input, select");
      const nombre = inputs[0].value.trim();
      const telefono = inputs[1].value.trim();
      const habitacion = inputs[2].value;
      const checkIn = inputs[3].value;
      const checkOut = inputs[4].value;

      // Mensaje estructurado para WhatsApp
      const mensaje = `Hola Hotel Granaderos! Me gustaría consultar disponibilidad para una reserva:\n\n` +
        `• *Nombre:* ${nombre}\n` +
        `• *Contacto:* ${telefono}\n` +
        `• *Habitación:* ${habitacion}\n` +
        `• *Check-in:* ${checkIn}\n` +
        `• *Check-out:* ${checkOut}`;

      // Reemplaza con el número real de WhatsApp del hotel cuando lo tengas
      const numeroWhatsApp = "5491100000000"; 
      const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

      window.open(url, "_blank");
    });
  }
});
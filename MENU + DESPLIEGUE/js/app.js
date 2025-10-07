// Funcionalidad de acordeón para el menú CROKY
document.addEventListener('DOMContentLoaded', function () {
  const headers = document.querySelectorAll('.accordion-header');
  headers.forEach(header => {
    header.addEventListener('click', function () {
      const target = document.querySelector(this.dataset.target);
      const isActive = this.classList.contains('active');
      // Cierra todos
      document.querySelectorAll('.accordion-header').forEach(h => h.classList.remove('active'));
      document.querySelectorAll('.accordion-body').forEach(b => b.classList.remove('active'));
      // Si no estaba activo, abre
      if (!isActive) {
        this.classList.add('active');
        target.classList.add('active');
      }
    });
  });
  // Abre la primera sección por defecto
  if (headers.length > 0) {
    headers[0].classList.add('active');
    const firstBody = document.querySelector(headers[0].dataset.target);
    if (firstBody) firstBody.classList.add('active');
  }
});


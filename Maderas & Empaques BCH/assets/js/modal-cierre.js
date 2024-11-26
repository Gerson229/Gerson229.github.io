// Abre el modal cuando cualquiera de los botones es clickeado
document.querySelectorAll('.btn-abrir-modal').forEach(function(button) {
    button.addEventListener('click', function(event) {
      event.preventDefault(); // Prevenir la acción por defecto (si es necesario)
      document.getElementById('confirmacionCerrarSesion').style.display = 'flex'; // Mostrar el modal
    });
  });
  
  // Acción de "Sí" (confirmar cierre de sesión)
  document.getElementById('confirmarCerrarSesion').addEventListener('click', function() {
    window.location.href = "index.html"; // Redirige a la página de cierre de sesión
  });
  
  // Acción de "No" (cancelar cierre de sesión)
  document.getElementById('cancelarCerrarSesion').addEventListener('click', function() {
    document.getElementById('confirmacionCerrarSesion').style.display = 'none'; // Oculta el modal
  });
  
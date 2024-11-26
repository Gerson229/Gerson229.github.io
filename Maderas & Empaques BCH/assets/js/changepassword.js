// Función para alternar la visibilidad de la contraseña
function togglePasswordVisibility(inputId, buttonId) {
    const inputField = document.getElementById(inputId);
    const toggleButton = document.getElementById(buttonId);
    
    if (inputField.type === "password") {
      inputField.type = "text";
      toggleButton.innerHTML = '<i class="bi bi-eye-slash"></i>'; // Cambiar icono a "ocultar"
    } else {
      inputField.type = "password";
      toggleButton.innerHTML = '<i class="bi bi-eye"></i>'; // Cambiar icono a "ver"
    }
  }
  
  // Manejar los botones de "ver/ocultar" para cada campo de contraseña
  document.getElementById("toggleCurrentPassword").addEventListener("click", function() {
    togglePasswordVisibility("currentPassword", "toggleCurrentPassword");
  });
  document.getElementById("toggleNewPassword").addEventListener("click", function() {
    togglePasswordVisibility("newPassword", "toggleNewPassword");
  });
  document.getElementById("toggleConfirmPassword").addEventListener("click", function() {
    togglePasswordVisibility("confirmPassword", "toggleConfirmPassword");
  });
  
  // Validar el formulario antes de enviarlo
  document.getElementById("changePasswordForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que se envíe el formulario de manera predeterminada
  
    const currentPassword = document.getElementById("currentPassword").value;
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    
    // Verificar si las contraseñas coinciden
    if (newPassword !== confirmPassword) {
      document.getElementById("passwordError").classList.remove("d-none"); // Mostrar error
    } else {
      document.getElementById("passwordError").classList.add("d-none"); // Ocultar error
      // Aquí puedes agregar la lógica para enviar el formulario o realizar la solicitud de cambio de contraseña
      alert("Contraseña cambiada con éxito.");
      // Cerrar el modal
      var modal = new bootstrap.Modal(document.getElementById('changePasswordModal'));
      modal.hide();
    }
  });

  $('.fixed-button.active')
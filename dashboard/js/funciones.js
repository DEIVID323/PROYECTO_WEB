// Función para cargar contenido dinámico en el área central
function cargarContenido(url) {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al cargar la página');
      }
      return response.text();
    })
    .then(data => {
      document.getElementById('Seccontenido').innerHTML = data;

      // Si es necesario, cargar CSS adicional dinámico
      let cssId = 'css-login3';
      if (!document.getElementById(cssId)) {
        let link = document.createElement('link');
        link.id = cssId;
        link.rel = 'stylesheet';
        link.href = '../css/login3.css';
        document.head.appendChild(link);
      }
    })
    .catch(error => {
      console.error('Error al cargar', error);
      document.getElementById('Seccontenido').innerHTML =
        '<h1>Error al buscar el contenido a mostrar</h1>';
    });
}

// Control de candado para bloquear/desbloquear sidebar
let isLocked = false;

function toggleSidebarLock() {
  const sidebar = document.querySelector('.sidebar');
  const icon = document.querySelector('#toggleLock i');

  isLocked = !isLocked;

  if (isLocked) {
    sidebar.classList.add('locked');
    icon.classList.remove('bx-lock-open');
    icon.classList.add('bx-lock');
  } else {
    sidebar.classList.remove('locked');
    icon.classList.remove('bx-lock');
    icon.classList.add('bx-lock-open');
  }
}

// Espera que el DOM cargue antes de asociar el evento al botón del candado
document.addEventListener('DOMContentLoaded', () => {
  const lockButton = document.getElementById('toggleLock');
  if (lockButton) {
    lockButton.addEventListener('click', toggleSidebarLock);
  }
});

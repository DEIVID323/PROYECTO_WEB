function cargarContenido(url) {
  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error('Error al cargar la página');
      return response.text();
    })
    .then(data => {
      document.getElementById('Seccontenido').innerHTML = data;

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

// Control de candado y expansión
document.addEventListener('DOMContentLoaded', () => {
  const lockButton = document.getElementById('toggleLock');
  const sidebarContainer = document.getElementById('Secmenu');
  const icon = document.querySelector('#toggleLock i');

  let isLocked = false;

  if (lockButton) {
    lockButton.addEventListener('click', () => {
      isLocked = !isLocked;

      if (isLocked) {
        sidebarContainer.classList.add('expanded');
        sidebarContainer.classList.add('locked');
        icon.classList.remove('bx-lock-open');
        icon.classList.add('bx-lock');
      } else {
        sidebarContainer.classList.remove('expanded');
        sidebarContainer.classList.remove('locked');
        icon.classList.remove('bx-lock');
        icon.classList.add('bx-lock-open');
      }
    });
  }
});

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
document.addEventListener('DOMContentLoaded', () => {
  const lockButton = document.getElementById('toggleLock');
  const sidebarContainer = document.getElementById('Secmenu');
  const icon = document.querySelector('#toggleLock i');

  if (lockButton) {
    lockButton.addEventListener('click', () => {
      // Alternar clase locked
      sidebarContainer.classList.toggle('locked');

      // Cambiar icono según estado
      if (sidebarContainer.classList.contains('locked')) {
        icon.classList.remove('bx-lock-open');
        icon.classList.add('bx-lock');
      } else {
        icon.classList.remove('bx-lock');
        icon.classList.add('bx-lock-open');
      }
    });
  }
});


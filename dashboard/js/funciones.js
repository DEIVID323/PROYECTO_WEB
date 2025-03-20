function cargarcontenido(url) {
    // Ajusta la ruta según tu estructura; por ejemplo, si login3.html está en la raíz:
    fetch('login3')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar la página');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('SecContenido').innerHTML = data;
            // Inyectar el CSS correspondiente al login si no está ya agregado
            let cssId = 'css-login3'; // un id para identificar el link del login
            if (!document.getElementById(cssId)) {
                let link = document.createElement('link');
                link.id = cssId;
                link.rel = 'stylesheet';
                // Ajusta la ruta a tu archivo CSS, por ejemplo:
                link.href = '../css/login3.css';  
                document.head.appendChild(link);
            }
        })
        .catch(error => {
            console.error('Error al cargar', error);
            document.getElementById('SecContenido').innerHTML =
                '<h1>Error al buscar el contenido a mostrar</h1>';
        });
}
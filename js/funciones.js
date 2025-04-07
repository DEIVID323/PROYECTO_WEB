function cargarContenido(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el contenido');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('Seccontenido').innerHTML =`<img src="${url}" alt="Imagen cargada" style="max-width: 100%;">`;
        })
        .catch(error => {
            console.error('Error al cargar contenido:', error);
            document.getElementById('Seccontenido').innerHTML = "<p>Error al cargar el contenido.</p>";
        });
}
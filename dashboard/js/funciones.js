function CargarContenido(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar la página we');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('SecContenido').innerHTML = data;
        })
        .catch(error => {
            console.logerror('Error al cargar', error);
            document.getElementById('SecContenido').innerHTML =
                '<h1>Error al buscar el contenido a mostrar</h1';
        });
}
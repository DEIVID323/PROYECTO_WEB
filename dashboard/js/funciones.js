function cargarcontenido(url) {
  let extension = ruta.split('.').pop();
  let html = "";

  if (extension === 'png' || extension === 'jpg' || extension === 'jpeg' || extension === 'gif') {
    html = `<img src="${ruta}" style="width:100%; height:auto; display:block; margin:auto;" />`;
  } else {
    html = `<iframe src="${ruta}"></iframe>`;
  }

  document.getElementById("Seccontenido").innerHTML = html;
}

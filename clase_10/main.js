const URL1 = "https://api.tvmaze.com/shows/1";

subirimg(URL1);

const URL2 = "https://api.tvmaze.com/shows/2"

subirimg(URL2);

const URL3 = "https://api.tvmaze.com/shows/3"

subirimg(URL3);

const URL4 = "https://api.tvmaze.com/shows/4"

subirimg(URL4);

const URL5 = "https://api.tvmaze.com/shows/5"

subirimg(URL5);

const URL6 = "https://api.tvmaze.com/shows/6"

subirimg(URL6);


function subirimg(url){
    fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    const serie = new Serie(
      data.id,
      data.url,
      data.name,
      data.language,
      data.genres,  
      data.image.medium
    );

    const elementoHtml = serie.createHtmlElement();
    document.getElementById("series").appendChild(elementoHtml);
  })
  .catch(error => {
    console.error("Error al cargar la serie: " + error);
  })
  .finally(() => {
    console.log("Promesa finalizada");
  });
}

let paginaActual = 0; 
const SERIES = 6;

function cargarPagina(pagina) {
  const contenedor = document.getElementById("series");
  contenedor.innerHTML = ""; 

  fetch("https://api.tvmaze.com/shows")
    .then(res => res.json())
    .then(data => {
      const inicio = pagina * SERIES;
      const fin = inicio + SERIES;
      const seriesPagina = data.slice(inicio, fin);

      seriesPagina.forEach(serieData => {
        const serie = new Serie(
          serieData.id,
          serieData.url,
          serieData.name,
          serieData.language,
          serieData.genres,
          serieData.image.medium 
        );

        const elemento = serie.createHtmlElement();
        contenedor.appendChild(elemento);

        
      });
    })
    .catch(error => {
      console.error("Error al cargar las series:", error);
    });
}


function paginaSiguiente() {
  paginaActual++;
  cargarPagina(paginaActual);
}
function paginaAnterior() {
    paginaActual--;
    cargarPagina(paginaActual);
}



document.addEventListener("DOMContentLoaded", () => {
  cargarPagina(paginaActual);

  const btn = document.getElementById("siguiente");
  if (btn) {
    btn.addEventListener("click", paginaSiguiente);
  }
  const btnAnterior = document.getElementById("anterior");
  if (btnAnterior) btnAnterior.addEventListener("click", paginaAnterior);
});


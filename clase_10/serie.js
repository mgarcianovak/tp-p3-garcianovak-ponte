class Serie {
  constructor(id, url, name, language, genres, image) {
    this.id = id;
    this.url = url;
    this.name = name;
    this.language = language;
    this.generes = genres;
    this.image = image;
  }


  

    static createFromJsonString(json){
        const lista = JSON.parse(json);
        return new Serie(lista.id, lista.url, lista.name, lista.language, lista.generes, lista.image);
    }

    toJsonString() {
    return JSON.stringify({
      id: this.id,
      url: this.url,
      name: this.name,
      language: this.language,
      generes: this.genres,
      image: this.image
    });
  }
    
    createHtmlElement(){
        const container = document.createElement("form");

        const Nombre = document.createElement("h1");
        Nombre.textContent = `Nombre: ${this.name}`;
        container.appendChild(Nombre);

        const Lenguaje = document.createElement("p");
        Lenguaje.textContent = `Lenguaje: ${this.language}`; 
        container.appendChild(Lenguaje);

        const genero = document.createElement("p");
        genero.textContent = `Géneros: ${this.generes.join()}`;
        container.appendChild(genero);

        const divisor = document.createElement("br")
        container.appendChild(divisor)

        const link = document.createElement("a");
        link.href = this.url;                
        
        const img_link = document.createElement("img");
        img_link.src = this.image;
        img_link.alt = `${this.name}`;
        img_link.classList.add("serie-imagen");

        link.appendChild(img_link);
        container.appendChild(link);

        container.appendChild(document.createElement("hr"));


        const boton_guardar = document.createElement("button");
        boton_guardar.textContent = "guardar serie";
        boton_guardar.id = "btn_guardar";
        container.appendChild(boton_guardar);
        boton_guardar.addEventListener("click", () => {
          Serie.guardarSerie(this); 
        });        

        return container; 

    }

    static guardarSerie(serie) {
      const clave = "seriesGuardadas";

      let guardadas = JSON.parse(localStorage.getItem(clave)) || [];

      guardadas.push(serie);

      localStorage.setItem(clave, JSON.stringify(guardadas));


        
    } 
        
}



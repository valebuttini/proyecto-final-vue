const { createApp } = Vue;

const Header = {
  props: {
    titulo: String
  },
  template: `
  <h1 class="text-black">{{titulo}}</h1>
  <a href="./index.html">INICIO</a>
  <a href="./carrito.html">CARRITO</a>
  <a href="./catalogo.html">CATALOGO</a>
  `
} 
const Cuerpo = {
  props: {
    subtitulo: String,
    parrafo: String
  },
  template: `
  <h1 class="text-black">{{subtitulo}}</h1>
  <p>{{parrafo}}</p>

  `
} 


const MainCards = {
  props: {
    titulo: String,
    costo: Number,
    foto: String
  },
  template: `
  <div align="center">
  <div>
      <img class="img-thumbnail img-cropped" :src="foto" :title="titulo">
      <p>{{ titulo }}</p>
      <p class="text-black">$<strong> {{ costo }}</strong></p>
      <button class="btn btn-success btn-rounded">Agregar</button>
  </div>
  </div>
  `
}


createApp({
  components: {
    'header-component': Header,
    'main-cards': MainCards,
    'main-component': Cuerpo,
  },
  data() {
    return {
      cards: [

        {
          id: 1,
          titulo: "Lomo con papas rotas",
          costo: 2500,
          foto: "https://images.unsplash.com/photo-1608877907149-a206d75ba011?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"
        },
        {
          id: 2,
          titulo: "Empanadas cortadas a cuchillo",
          costo: 300,
          foto: "https://images.unsplash.com/photo-1619926096619-5956ab4dfb1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
        },
        {
          id: 3,
          titulo: "Carne a la llama",
          costo: 3000,
          foto: "https://images.unsplash.com/photo-1631484331080-45a8221edd9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
        },
        {
          id: 4,
          titulo: "Pecho con chimi ",
          costo: 1500,
          foto: "https://images.unsplash.com/photo-1614231556674-f91780097f53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
        },
        {
            id: 5,
            titulo: "Bife de chorizo con papas francesas",
            costo: 1000,
            foto: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
          },
      ]

    }
  }
}).mount("#app")
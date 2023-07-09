import { Component } from '@angular/core';
import { Noticia } from './interfaces/noticia.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog-angular';
  noticias: Noticia[];

  constructor(){
    this.noticias = [
      {titulo: "Titulo de la noticia", img: "https://placehold.co/200", contenido: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni accusantium soluta neque blanditiis, corrupti eius voluptas consequatur aperiam quo eveniet.", fecha: new Date('08.04.2022')},
      {titulo: "Titulo de la noticia", img: "https://placehold.co/200", contenido: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni accusantium soluta neque blanditiis, corrupti eius voluptas consequatur aperiam quo eveniet.", fecha: new Date()},
      {titulo: "Titulo de la noticia", img: "https://placehold.co/200", contenido: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni accusantium soluta neque blanditiis, corrupti eius voluptas consequatur aperiam quo eveniet.", fecha: new Date()},
      {titulo: "Titulo de la noticia", img: "https://placehold.co/200", contenido: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni accusantium soluta neque blanditiis, corrupti eius voluptas consequatur aperiam quo eveniet.", fecha: new Date()},
     ]
  }

  // Paso 5
  guardar($event: Noticia) {

    let noticia : Noticia = {titulo: $event.titulo,
      img: $event.img, contenido: $event.contenido, 
      fecha: new Date($event.fecha)
    };
    
    if (noticia.titulo === "" || noticia.contenido === "" ||
    noticia.img === ""){
      alert ('los campos no pueden ser vacios');
      
    }else{
      let busqueda = this.noticias.findIndex(item => item.titulo
        === noticia.titulo)
        if (busqueda === -1){
          this.noticias.push(noticia)
        }else{
          alert('noticia duplicada')
        }
    }
  }

 cargarNoticias(): string{
    let noticias= "";

    this.noticias.forEach(noticia=>{
      noticias = noticias + `<article class="article-content">
      <img class="article-img" src="${noticia.img}" alt="">
      <h2 class="article-title">${noticia.titulo}</h2>
      <p class="article-text">${noticia.contenido}</p>
      <span class="date">${noticia.fecha.toDateString()}</span>
    </article>`
    })

    return noticias;
  }
}


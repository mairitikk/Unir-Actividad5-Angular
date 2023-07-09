import { Component, EventEmitter, Output} from '@angular/core';
import { Noticia } from 'src/app/interfaces/noticia.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  noticia: Noticia ={titulo:"", img:"", contenido:"", fecha: new Date};
   
  // paso 1
  @Output() noticiaEmitido: EventEmitter<Noticia>;

  // paso 2
  constructor(){
    this.noticiaEmitido= new EventEmitter();
  }

  guardar(): void{
    // paso 3
    this.noticiaEmitido.emit(this.noticia);
  }

}

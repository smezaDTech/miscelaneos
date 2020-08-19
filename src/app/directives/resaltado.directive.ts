import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( private el:ElementRef) { 
    console.log("Directiva llamada")
    /* el.nativeElement.style.backgroundColor = "yellow"; */
  }

  /* Color traido desde la propiedad del parrafo en la vista */
  @Input("appResaltado") nuevoColor:string;

  /* Se crea el elemento para resaltar el parrafo, guardando el color como parametro */
  private resaltar(color:string){
    this.el.nativeElement.style.backgroundColor = color;
  }

  /* Listener de hover al entrar y salir el mouse */
  /* Guarda el nuevo color traido de la vista o si es vacio aplica uno en este caso "amarillo" */
  @HostListener('mouseenter') mouseEntro(){
    this.resaltar(this.nuevoColor || 'yellow');
  }

  @HostListener('mouseleave') mouseSalio(){
    this.resaltar(null);
  }
}

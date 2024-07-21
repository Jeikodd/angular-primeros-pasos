import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input( )
  public characterList: Character[] = [];

  // Creando el EventEmitter
  @Output()
  public onDelete = new EventEmitter<string>();

  // Desde el hijo voy a emitir el indice del character
  onDeleteCharacter( id: string ):void {
    // TODO: Emitir el ID del personaje
    this.onDelete.emit( id );
  }
}

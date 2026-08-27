import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LISTA_NOMES_MEUS_TREINOS} from '../services/meusTreinosDB';

@Component({
  imports: [],
  selector: 'app-toggle-menu',
  styleUrl: './toggle-menu.css',
  templateUrl: './toggle-menu.html',
})
export class ToggleMenu {

  nomesTreinos:string[] = LISTA_NOMES_MEUS_TREINOS
  @Output() toggleMenu = new EventEmitter();
  @Input() selecionado:string = '';

  protected mudarToggle(nome: string) {
    this.toggleMenu.emit(nome);
  }
}

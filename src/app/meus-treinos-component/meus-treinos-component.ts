import {MenuComponent} from '../menu-component/menu-component';
import {Component} from '@angular/core';
import {BibliaComponent} from '../biblia-component/biblia-component';
import {CardListMeuTreino} from '../card-list-meu-treino/card-list-meu-treino';
import {ToggleMenu} from '../toggle-menu/toggle-menu';
import {LISTA_NOMES_MEUS_TREINOS} from '../services/meusTreinosDB';

@Component({
  imports: [
    MenuComponent,
    BibliaComponent,
    CardListMeuTreino,
    ToggleMenu
  ],
  selector: 'app-meus-treinos-component',
  styleUrl: './meus-treinos-component.css',
  templateUrl: './meus-treinos-component.html',
})
export class MeusTreinosComponent {

  selecionado:string = LISTA_NOMES_MEUS_TREINOS[0];


  protected mudarToggleEvent(nome: string) {
      this.selecionado = nome;
  }
}

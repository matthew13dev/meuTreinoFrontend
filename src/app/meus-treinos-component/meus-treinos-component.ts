import {MenuComponent} from '../menu-component/menu-component';
import {
  ExercicioDTO,
  LISTA_GERAL_MEUS_TREINOS,
  LISTA_NOMES_MEUS_TREINOS,
  MeuTreinoDTO
} from '../services/meusTreinosDB';
import {Component} from '@angular/core';
import {BibliaComponent} from '../biblia-component/biblia-component';
import {CardListMeuTreino} from '../card-list-meu-treino/card-list-meu-treino';

@Component({
  imports: [
    MenuComponent,
    BibliaComponent,
    CardListMeuTreino
  ],
  selector: 'app-meus-treinos-component',
  styleUrl: './meus-treinos-component.css',
  templateUrl: './meus-treinos-component.html',
})
export class MeusTreinosComponent {

  protected meusTreinos: MeuTreinoDTO[] = LISTA_GERAL_MEUS_TREINOS
  protected nomesTreinos:string[] = LISTA_NOMES_MEUS_TREINOS

  botaoToggle = this.nomesTreinos[0];


  protected mudarToggle(nome: string) {
      this.botaoToggle = nome;
  }
}
